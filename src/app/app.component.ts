import { Component } from '@angular/core';
import { SliderService } from './services/slider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tut Pro School Survey';
  back = 'Go back';
  next = 'Next slide';
  finish = 'Submit survey';
  get nextStop(): boolean {
    return this.sliderService.nextStop;
  }
  get prevStop(): boolean {
    return this.sliderService.prevStop;
  }
  get slideId(): number {
    return this.sliderService.slideId;
  }

  constructor(private sliderService: SliderService) {}

  initPrev(): void {
    this.sliderService.modifyId(-1);
    // console.log('Back to page ', this.slideId);
  }
  initNext(): void {
    this.sliderService.modifyId(1);
    // console.log('Forward to page ', this.slideId);
  }
}
