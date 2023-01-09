import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/test/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  constructor(public authService:AuthService){}
  public username:string = '';
  ngOnInit(): void {
    this.authService.getuserdetails().subscribe((username) => {
      this.username = username;
      console.log("WORKSSS", this.username);
    });
  }

}
