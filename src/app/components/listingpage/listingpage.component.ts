import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listingpage',
  templateUrl: './listingpage.component.html',
  styleUrls: ['./listingpage.component.css']
})
export class ListingpageComponent implements OnInit {
  public productData: any;
  
  public data:any;

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.httpClient.get<any>('http://localhost:3000/products').subscribe(
      res => {
        this.data = res;
      }
    )
  };
}
