import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

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
