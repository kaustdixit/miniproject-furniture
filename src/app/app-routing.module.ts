import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListingpageComponent } from './components/listingpage/listingpage.component';
import { ProductpageComponent } from './components/productpage/productpage.component';


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