using AuthAPI.Context;
using AuthAPI.Helpers;
using AuthAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AuthAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _authContext;

        public UserController(AppDbContext appDbContext)
        {
            _authContext = appDbContext;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] user userObj)
        {
            if(userObj == null)
                return BadRequest();

            var user = await _authContext.users.FirstOrDefaultAsync(x => x.Username== userObj.Username);
            
            if (user == null)
                return NotFound(new { Message = "User Not Found" });

            if (!PasswordHasher.VerifyPassword(userObj.Password, user.Password))
            {
                return BadRequest(new { Message = "Inorrect Password" });
            }

            user.Token = CreateJwt(user);
          
            return Ok(new
            {
              Token = user.Token,
              Message = "Login Success!"
            });
        }

        [HttpPost("register")]

        public async Task<IActionResult> RegisterUser([FromBody] user userObj)
        {
            if(userObj == null)
                return BadRequest();

            if (await CheckUsernameExist(userObj.Username))
                return BadRequest(new { Message = "Username Already Exists!" });

            if (await CheckEmailExist(userObj.Email))
                return BadRequest(new { Message = "Email Already Exists!" });

            userObj.Password = PasswordHasher.HashPassword(userObj.Password);
            userObj.Role = "Admin";
            await _authContext.users.AddAsync(userObj);
            await _authContext.SaveChangesAsync();
            return Ok(new { Message = "User Added!" });
        }

        private Task<bool> CheckUsernameExist(string username)
        {
            return _authContext.users.AnyAsync(entry => entry.Username == username);
        }
        private Task<bool> CheckEmailExist(string email)
        {
          return _authContext.users.AnyAsync(entry => entry.Email == email);
        }

        private string CreateJwt(user user)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("testingJWTtoekization...");
            var payload = new ClaimsIdentity(new Claim[]
            {
              new Claim(ClaimTypes.Name, user.Name),
              new Claim(ClaimTypes.Role, user.Role)
            });

            var credentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
              Subject = payload,
              Expires = DateTime.UtcNow.AddMinutes(45),
              SigningCredentials = credentials
            };

            var token = jwtTokenHandler.CreateToken(tokenDescriptor);
            return jwtTokenHandler.WriteToken(token);
        }

        [HttpGet]

        public async Task<ActionResult<user>> getAllUsers()
        {
            return Ok( await _authContext.users.ToListAsync() );
        }
    }
}
