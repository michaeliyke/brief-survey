import { Component, OnInit } from '@angular/core';
import { SliderService } from '../services/slider.service';
import { ISlide } from '../islide';
import { IQuestion } from '../iquestion';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  data: ISlide[] = [
    {
      slideIndex: 0,
      questions: [
        {
          questionId: 0,
          question: 'Are you often ticked off?',
          options: ['yea I am', 'off course not', 'Not sure!']
        },
        {
          questionId: 1,
          question:
            'I always wake up early but as soon as it\'s eight at night I fling me over the bed',
          options: [
            'That\'s me',
            'That\'s not me',
            'That may be me',
            'It depends'
          ]
        }
      ]
    },
    {
      slideIndex: 1,
      questions: [
        {
          questionId: 3,
          question: 'I don\'t get angry when I am hungry. ',
          options: ['True', 'False', 'Both', 'It depends']
        },
        {
          questionId: 2,
          question: 'If I look at a mirror,  who will I see?',
          options: ['You', 'me', 'them', 'us']
        }
      ]
    },
    {
      slideIndex: 2,
      questions: [
        {
          questionId: 4,
          question: 'Are you the kind that hates anything beans with passion?',
          options: ['Yes', 'No', 'It\'s hard to say', 'Not sure']
        },
        {
          questionId: 5,
          question: 'I took an egg out of a dozens eggs. Ho many do I have?',
          options: [11, 1, 12, 13]
        }
      ]
    },
    {
      slideIndex: 3,
      questions: [
        {
          questionId: 7,
          question: 'I may eat rice but I never feel like doing so.',
          options: ['Not really', 'Exactly', 'Not all', 'MAy be']
        },
        {
          questionId: 6,
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
      slideIndex: 4,
      questions: [
        {
          questionId: 8,
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
      slideIndex: 5,
      questions: [
        {
          questionId: 9,
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
      slideIndex: 6,
      questions: [
        {
          questionId: 10,
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
  get slide(): ISlide {
    return this.sliderService.slide;
  }

  get message(): string {
    return this.questions[this.sliderService.slideId];
  }
  constructor(private sliderService: SliderService) {
    this.sliderService.slides = this.data;
    const id = this.sliderService.modifyId(0);
    // this.slide = this.sliderService.slide;
    this.slides = this.sliderService.slides;
    // console.log('Michael C Iyke', id, this.data[id]);
  }

  ngOnInit() {}
}
