import { AfterContentInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UiServiceService } from './services/ui-service.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

@ViewChild('sidenav') sidenav! : MatSidenav
MobileMenuOpened = false; 

constructor(
    private uiService : UiServiceService
){}

ngAfterViewInit(): void {
 this.uiService.responsiveMenuState$().subscribe(state=>{
  if(state) { this.sidenav.open() } else { this.sidenav.close() }
 })
}

menuOpen(){
  this.sidenav.close();
}
close(){
  this.sidenav.close();
}
}
