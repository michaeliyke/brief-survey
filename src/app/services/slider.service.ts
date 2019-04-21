import { Injectable } from '@angular/core';
import { ISlide } from '../islide';
import { IQuestion } from '../iquestion';
import { SurveyData } from '../interfaces/survey-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


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

  getQuestionsData(): Observable<ISlide[]> {
    return this.http.get<ISlide[]>('../../assets/short.json').pipe(
      tap((data) => {
        return; // console.log('Server payload', JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = `An error occured: ${error.error.message}`;
    } else {
      msg = `Server returned code: ${error.status}, error message is ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
  resetSlides() {
    this.slideId = 0;
    this.nextStop = false;
    this.prevStop = true;
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
