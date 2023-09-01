import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private responsiveMenuStateSub$ = new BehaviorSubject<boolean>(false);
  constructor() { }


  responsiveMenuState$(){
    return this.responsiveMenuStateSub$.asObservable();
  }

  setResponsiveMenuState(state :boolean){
     this.responsiveMenuStateSub$.next(state);
  }
}
