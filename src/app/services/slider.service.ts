import { Injectable } from '@angular/core';
import { ISlide } from '../islide';
import { IQuestion } from '../iquestion';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  prevStop: boolean;
  nextStop: boolean;
  slideId = 0;
  slides: ISlide[];
  get questionId(): number {
    return this.questionId;
  }
  set questionId(id: number) {
    this.questionId = id;
  }
  get questions(): IQuestion[] /* Current questions for a slide */ {
    return this.slide.questions;
  }
  get question(): IQuestion /* Holds a question */ {
   const question = this.questions[this.questionId];
   this.questionId = question.questionId;
   return question;
  }
  get slide(): ISlide {
    return  this.slides[this.slideId];
  }

  constructor() {}

  modifyId(num: number): number {
    const id = this.slideId + num;
    const slides = this.slides;
    if (slides[id]) {
    this.nextStop = slides[id + 1] ? false : true;
    this.prevStop = slides[id - 1] ? false : true;
    this.slideId = id;
    // console.log()
    } else {
      console.warn('Out of range', slides.length, id);
    }
    return id;
  }
}
