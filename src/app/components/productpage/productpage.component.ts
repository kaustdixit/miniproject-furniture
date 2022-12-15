import { Component, OnInit } from '@angular/core';
import { mockProductData } from 'src/app/test/product.test';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
})
export class ProductpageComponent implements OnInit {
  public productDataone: any[] = [];
  oneProd: any = {};
  constructor(private activatedRouteObj: ActivatedRoute) {}
  ngOnInit(): void {
    this.productDataone = mockProductData;

    let no = this.activatedRouteObj.snapshot.params['id'];
    this.oneProd = this.productDataone.find((item) => item._id.$oid === no);
    console.log(no);
    console.log(this.oneProd);
    console.log(this.productDataone);
  }
}
