import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{

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
    // when window width is >= 480px
  
    // when window width is >= 640px
    1140: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
 }


 ngAfterViewInit(): void {
   Object.assign(this.swiperRef.nativeElement , this.SwiperConfig);
   this.swiperRef.nativeElement.initialize();
 }
}
