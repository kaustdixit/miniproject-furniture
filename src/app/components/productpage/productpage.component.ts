import { Component, OnInit } from '@angular/core';
import { mockProductData } from 'src/app/test/product.test';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  public productDataone: any;
  oneProd:any = {};
  constructor(private activatedRouteObj: ActivatedRoute){

  }
  ngOnInit(): void {
    this.productDataone = mockProductData;

    let no = this.activatedRouteObj.snapshot.params["name"];
    this.oneProd =  this.productDataone.find((product: { name: any; }) => product.name == no);
    console.log(this.oneProd);
  }
}

