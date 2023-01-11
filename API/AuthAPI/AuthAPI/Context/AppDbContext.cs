using Microsoft.EntityFrameworkCore;

namespace AuthAPI.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { 
            
        }

        public DbSet<Models.user> users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Models.user>().ToTable("users");
        }
    }
}
