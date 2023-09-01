import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-trading-platform',
  templateUrl: './trading-platform.component.html',
  styleUrls: ['./trading-platform.component.css']
})
export class TradingPlatformComponent implements AfterViewInit {
  
  @ViewChild('swiperRef') swiperRef!: ElementRef;

  SwiperConfig: SwiperOptions ={
   slidesPerView: 1,
   spaceBetween: 20,
   // Responsive breakpoints
   breakpoints: {
     // when window width is >= 320px
     320: {
       slidesPerView: 1,
       spaceBetween: 20
     },
     420: {
      slidesPerView: 3,
      spaceBetween: 20
    },
     // when window width is >= 480px
   
     // when window width is >= 640px
     1140: {
       slidesPerView: 4,
       spaceBetween: 60
     },



     
   }
  }
 
 
  ngAfterViewInit(): void {
    Object.assign(this.swiperRef.nativeElement , this.SwiperConfig);
    this.swiperRef.nativeElement.initialize();
  }
}
