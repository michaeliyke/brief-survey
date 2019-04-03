import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  slideId = 0;
  prevStop: boolean;
  nextStop: boolean;
  slides: Array<string>;

  constructor() {}

  modifyId(num: number): void {
    const id = this.slideId + num;
    const slides = this.slides;
    if (slides[id]) {
    this.nextStop = slides[id + 1] ? false: true;
    this.prevStop = slides[id - 1] ? false: true;
    this.slideId = id;
    } else {
      console.warn('Out of range', slides.length, id);
    }
  }
}
