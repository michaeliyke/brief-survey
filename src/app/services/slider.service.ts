import { Injectable } from '@angular/core';
import { ISlide } from '../islide';
import { IQuestion } from '../iquestion';
import { FormControl } from '@angular/forms';
import { SurveyData } from '../interfaces/survey-data';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SliderService {
  prevStop: boolean;
  nextStop: boolean;
  slideId = 0;
  slides: ISlide[];
  formControls: SurveyData;
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
  questionsData: object;
  constructor(public http: HttpClient) {}

  getQuestionsData(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe((payload) => {
      this.questionsData = payload;
    });
  }
  modifyId(num: number): number {
    const id = this.slideId + num;
    const slides = this.slides;
    if (slides[id]) {
    this.nextStop = slides[id + 1] ? false : true;
    this.prevStop = slides[id - 1] ? false : true;
    this.slideId = id;
    // console.log()
    } else {
      console.warn('RangeError:: Total slides-:',  slides.length, 'slideId ', id);
    }
    return id;
  }
}
