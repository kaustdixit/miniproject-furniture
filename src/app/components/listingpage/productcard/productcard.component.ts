import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
})
export class ProductcardComponent {
  constructor(private router: Router) {}
  @Input() public productData: any;

  public clickMe(test: any) {
    this.router.navigate([`Product/${test}`]);
    let id:number = test;
    console.log(id); 
  }
}
