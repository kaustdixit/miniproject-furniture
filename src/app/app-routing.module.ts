import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HomepageComponent } from './homepage/homepage.component';
import { ListingpageComponent } from './listingpage/listingpage.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes: Routes = [
  {path : "", component : HomepageComponent},
  {path : "Home", component : HomepageComponent},
  {path : "List", component : ListingpageComponent},
  {path : "Product/:id", component : ProductpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }