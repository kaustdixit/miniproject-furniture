import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/test/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService:AuthService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
