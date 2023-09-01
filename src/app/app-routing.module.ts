import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TradingPlatformComponent } from './pages/trading-platform/trading-platform.component';
import { WhatsDifferenceComponent } from './pages/whats-difference/whats-difference.component';


const routes: Routes = [
  { path : '' , component: HomeComponent},
  { path : 'about' , component: AboutComponent},
  { path : 'contact-us' , component: ContactUsComponent},
  { path : 'faq' , component:FaqComponent},
  { path : 'trading-platform' , component:TradingPlatformComponent},
  { path : 'whats-difference' , component:WhatsDifferenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
