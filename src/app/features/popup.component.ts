import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent implements OnInit {

  private success = new Subject<string>();
  popupType: string;

  staticAlertClosed = false;
  successMessage: string;

  constructor(private popupService: PopupService) {
    this.popupService.showPopup = this.showPopup.bind(this);
   }
  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 2000);

    this.success.subscribe((message) => this.successMessage = message);
    this.success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  showPopup(msg: string, popupType: string) {
    this.popupType = popupType;
    this.success.next( msg );
  }
}
