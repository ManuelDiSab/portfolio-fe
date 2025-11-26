import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private BehaviorHeight = new BehaviorSubject<number>(0) //Behavior subject per recuperare l'altezza 
  height$ = this.BehaviorHeight.asObservable()
  setNavbarHeight(alt: number) {
    this.BehaviorHeight.next(alt)
  }

  getAltNavbar(): number {
    return this.BehaviorHeight.getValue()
  }

}
