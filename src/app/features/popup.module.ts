import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from './popup.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [NgbModule, BrowserModule],
  declarations: [PopupComponent],
  exports: [PopupComponent]
})
export class PopupModule { }
