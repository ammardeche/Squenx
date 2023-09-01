import { Component } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 
  constructor(
    private ui : UiServiceService
  ){}

  SidenavOpen(){
    this.ui.setResponsiveMenuState(true);
  }
  

}
