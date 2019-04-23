
import { Injectable } from '@angular/core';

@Injectable(
    { providedIn: 'root' }
  )


export class PopupService {
   duration: number;
   delay: number;
  get getDelay(): number {
    return this.delay;
  }
  get getDuration(): number {
    return this.duration;
  }
  showPopup(msg: string, popupType: string, dbTime?: number, duration?: number) {
  console.log('Work has been called from the popup service', msg);
}
}
