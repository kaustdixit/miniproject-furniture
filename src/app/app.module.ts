import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListingpageComponent } from './components/listingpage/listingpage.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { LoginComponent } from './components/header/login/login.component';
import { ProductcardComponent } from './components/listingpage/productcard/productcard.component';
import { CarouselComponent } from './components/homepage/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ListingpageComponent,
    ProductpageComponent,
    ProductcardComponent,
    CarouselComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
