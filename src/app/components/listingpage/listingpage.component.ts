import { Component, OnInit } from '@angular/core';
import { mockProductData } from 'src/app/test/product.test';

@Component({
  selector: 'app-listingpage',
  templateUrl: './listingpage.component.html',
  styleUrls: ['./listingpage.component.css']
})
export class ListingpageComponent implements OnInit {
  public productData: any;
  
  ngOnInit(): void {
    this.productData = mockProductData;
  }

}
