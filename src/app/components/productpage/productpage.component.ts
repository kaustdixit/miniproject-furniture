import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
})
export class ProductpageComponent implements OnInit {
  public data: any;
  public productDataone: any[] = [];
  public oneProd: any = {};
  constructor(
    private activatedRouteObj: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.httpClient
      .get<any>('http://localhost:3000/products')
      .subscribe((res) => {
        this.data = res;
        this.productDataone = this.data;
        let no = this.activatedRouteObj.snapshot.params['id'];
        this.oneProd = this.productDataone.find((item) => item._id === no);
      });
  }
}
