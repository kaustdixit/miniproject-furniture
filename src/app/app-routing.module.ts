import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/header/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListingpageComponent } from './components/listingpage/listingpage.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path : "", component : HomepageComponent},
  {path : "Home", component : HomepageComponent},
  {path : "List", component : ListingpageComponent, canActivate:[AuthGuard]},
  {path : "Product/:id", component : ProductpageComponent},
  {path : "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }