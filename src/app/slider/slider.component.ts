import { Component, OnInit } from '@angular/core';
import { SliderService } from '../services/slider.service';
import { ISlide } from '../islide';
import { IQuestion } from '../iquestion';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Survey, SurveyData } from '../interfaces/survey-data';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides: ISlide[];
  question: string;
  questions: IQuestion[];
  formControls: FormControl[];
  form: FormGroup; // In place of customerForm: FormGroup;
  survey: Survey = new Survey(); // In place of customer = new Customer()

  currentControls: string[];
  prevSlideId: number;
  nameString: string;
  controlValues = {};
  cachedId: any;

  get slide(): ISlide {
    return this.sliderService.slide;
  }
  get totalNumberQuestions(): number {
    const lastSlide = this.sliderService.slides[
      this.sliderService.slides.length - 1
    ];
    const lastQuestion = lastSlide.questions[lastSlide.questions.length - 1];
    return lastQuestion.questionId;
  }

  get prevStop(): boolean {
    return this.sliderService.prevStop;
  }
  get nextStop(): boolean {
    return this.sliderService.nextStop;
  }
  submitClicked = false;
  dataSent = false;
  showSend = false;
  disableSend = false;
  datum: ISlide[];


  constructor(private sliderService: SliderService, private fb: FormBuilder, private popupService: PopupService) {
    // this.sliderService.slides = this.data;
  }

  ngOnInit() {
    // this.buildForm();
    this.sliderService.getQuestionsData().subscribe(
      (payload) => {
        this.datum = payload;
        this.sliderService.slides = payload;
        this.sliderService.modifyId(0);
        this.questions = this.slide.questions;
        this.setAllControls();
      },
      (error) => {
        console.log(error);
        // Here we show that something went wrong in the way of data coming along
      }
    );
  }
  initPrev(): void {
    this.submitClicked = false;
    this.showSend = false;
    this.sliderService.modifyId(-1);
    this.setAllControls();
  }
  initNext(boo: boolean = false): void {

    // if (true) {
       if (this.checkSelection() === true ) {
      this.addControls(this.currentControls);
      this.sliderService.modifyId(1);
      // Retrieve the value of current controls and add them to value stk for ref
      if (this.nextStop && boo === true) {
        if (this.submitClicked === true) {
          this.showSend = true;
        } else {
          this.submitClicked = true;
          this.showSend = true;
        }
      }
      this.setAllControls();
    }
  }

  submitSurvey(): void {
    this.submitClicked = false;
    this.dataSent = true;
    this.disableSend = true;
    this.showSend = false;
    console.warn(this.survey.json());
    this.popupService.showPopup('Your survey has been recieved successfuly', 'success');
    this.resetControls();
  }
  resetControls() {
    this.sliderService.resetSlides();
    this.controlValues = {};
    this.currentControls = [];
    this.setAllControls();
  }

  addControls(controls: string[]): void {
    this.cachedId = controls;
    let currentQuestion: any;
    let option: string;
    controls.forEach((control: string) => {
      option = this.form.get(control).value || '';
      const slide = this.slides[this.sliderService.slideId];
      for (const question of slide.questions) {
       for ( const opt of  question.options ) {
          if (('').replace.call(opt, /\s+/g, '_') === option) {
            currentQuestion = question;
            break;
          }

        }
      }

      this.controlValues[control] = option || '';
      // console.error('DATA COMING YOUR WAY');
      this.survey.push(new SurveyData(currentQuestion.question, option, currentQuestion.questionId), true);
    });
  }

  getControl(control: string): any {
    return this.controlValues[control];
  }


  setOptions(
    questionId: number,
    optionLength: number,
    slideIndex: number,
    init: boolean = false
  ): void {
    if (this.currentControls.length < 1 || init) {
      this.currentControls = [];
    }
    if (this.prevSlideId !== questionId) {
      let index: number;
      let option: string;
      for (index = 0; index < optionLength; index++) {
        option = `option${slideIndex}${questionId}`;
        if (this.currentControls.indexOf(option) === -1) {
          this.currentControls.push(option);
        }
      }
      this.buildForm();
      this.prevSlideId = questionId;
    }
  }

  buildForm(): void {
    const stb = {};
    this.currentControls.forEach((control) => {
      stb[control] = this.controlValues[control] || '';
    });
    this.form = this.fb.group(stb);
  }
  log(s: string, o: any = null): string {
    console.warn(s);
    return '';
  }
  setAllControls(init: boolean = false): void {
    this.currentControls = [];
    this.slides = this.sliderService.slides;
    this.slide.questions.forEach((question, i) => {
      this.setOptions(
        question.questionId,
        question.options.length,
        this.slide.slideIndex
      );
    });
  }

  checkSelection(): boolean {
    for (const control of this.currentControls) {
      const cont = this.form.get(control);
      if (cont.invalid === true) {
        this.popupService.showPopup('Please ensure you select all the options that apply to you before you proceed', 'danger');
        return false;
      }
    }
    return true;
  }



}
