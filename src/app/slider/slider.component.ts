import { Component, OnInit } from '@angular/core';
import { SliderService } from '../services/slider.service';
import { ISlide } from '../islide';
import { IQuestion } from '../iquestion';
import { FormControl, Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  data: ISlide[] = [
    {
      slideIndex: 1,
      questions: [
        {
          questionId: 1,
          question: 'Are you often ticked off?',
          options: ['yea I am', 'off course not', 'Not sure!']
        },
        {
          questionId: 2,
          question:
            'I always wake up early but as soon as it\'s eight at night I fling me over the bed',
          options: ['That\'s me', 'Not me', 'That may be me', 'It depends']
        }
      ]
    },
    {
      slideIndex: 2,
      questions: [
        {
          questionId: 3,
          question: 'I don\'t get angry when I am hungry. ',
          options: ['True', 'False', 'Both', 'It depends']
        },
        {
          questionId: 4,
          question: 'If I look at a mirror,  who will I see?',
          options: ['You', 'me', 'them', 'us']
        }
      ]
    },
    {
      slideIndex: 3,
      questions: [
        {
          questionId: 5,
          question: 'Are you the kind that hates anything beans with passion?',
          options: ['Yes', 'No', 'It\'s hard to say', 'Not sure']
        },
        {
          questionId: 6,
          question: 'I took an egg out of a dozens eggs. Ho many do I have?',
          options: [11, 1, 12, 13]
        }
      ]
    },
    {
      slideIndex: 4,
      questions: [
        {
          questionId: 7,
          question: 'I may eat rice but I never feel like doing so.',
          options: ['Not really', 'Exactly', 'Not all', 'MAy be']
        },
        {
          questionId: 8,
          question:
            'I\'m not a programmer but we are three on our tech team. Felix is on Network, who am I?',
          options: [
            'Network Engr',
            'Database Administrator',
            'Programmer',
            'None'
          ]
        }
      ]
    },
    {
      slideIndex: 5,
      questions: [
        {
          questionId: 9,
          question:
            'Nobody should ever mention the name \'beans\' to me nor any of its derivatives. Never!',
          options: [
            'That\'s right!',
            'No, that\'s not right!',
            'I\'m biased',
            'I\'m fine both ways'
          ]
        }
      ]
    },
    {
      slideIndex: 6,
      questions: [
        {
          questionId: 10,
          question:
            'If you cook garri, I will eat. But I never will cook garri on a day. That\'s how I feel about it.',
          options: [
            'Not true',
            'True!',
            'Can\'t say for certain',
            'Works for me either way'
          ]
        }
      ]
    },
    {
      slideIndex: 7,
      questions: [
        {
          questionId: 11,
          question:
            'I may occasionaly use superghetti or noodles, but please nobody should speak to me about any heavier food.',
          options: [
            'Typical!',
            'Nope! That can\'t be',
            'It\'s debatable',
            'No comment'
          ]
        }
      ]
    }
  ];
  questions = [
    'Are you the kind that hates anything beans with passion?',
    'I may eat rice but I never feel like doing so.',
    'Nobody should ever mention the name \'beans\' nor any of its derivatives to me. Never!',
    'If you cook garri, I will eat. But I never will cook garri any day. That\'s how I feel about it.',
    'I may occasionaly use superghetti or noodles, but please nobody should speak to me about any heavier food.'
  ];

  slides: ISlide[];
  question: string;
  formControls: any;
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

  get message(): string {
    return this.questions[this.sliderService.slideId];
  }
  get prevStop(): boolean {
    return this.sliderService.prevStop;
  }
  get nextStop(): boolean {
    return this.sliderService.nextStop;
  }
  initPrev(): void {
    this.sliderService.modifyId(-1);
    // console.log('Back to page ', this.slideId);
  }
  initNext(): void {
    this.nextStop ? this.todo() : this.sliderService.modifyId(1);
    // console.log('Forward to page ', this.slideId);
  }

  constructor(private sliderService: SliderService) {
    this.sliderService.slides = this.data;
    const id = this.sliderService.modifyId(0);
    // this.slide = this.sliderService.slide;
    this.slides = this.sliderService.slides;
    // console.log('Michael C Iyke', id, this.data[id]);
    this.sliderService.formControls = this.formControls;
  }

  ngOnInit() {}
  save(data: NgForm): void {
    console.log(data);
  }
  todo() {
    console.log('Submitting data...');
  }
}
