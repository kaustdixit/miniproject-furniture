import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListingpageComponent } from './listingpage/listingpage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductcardComponent } from './listingpage/productcard/productcard.component';
import { FilterComponent } from './listingpage/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ListingpageComponent,
    ProductpageComponent,
    ProductcardComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
