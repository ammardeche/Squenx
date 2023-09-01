import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { WhatsDifferenceComponent } from './pages/whats-difference/whats-difference.component';
import { TradingPlatformComponent } from './pages/trading-platform/trading-platform.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
// register Swiper custom elements
register();











@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    AboutComponent, 
    FaqComponent,
    WhatsDifferenceComponent, 
    TradingPlatformComponent, 
    ContactUsComponent, 
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
