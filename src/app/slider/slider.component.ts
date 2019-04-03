import { Component, OnInit } from '@angular/core';
import { SliderService } from '../services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  question: string;
  questions = [
    'Are you the kind that hates anything beans with passion?',
    'I may eat rice but I never feel like doing so.',
    'Nobody should ever mention the name \'beans\' nor any of its derivatives to me. Never!',
    'If you cook garri, I will eat. But I never will cook garri any day. That\'s how I feel about it.',
    'I may occasionaly use superghetti or noodles, but please nobody should speak to me about any heavier food.'
  ];

  get message(): string {
    return this.questions[this.sliderService.slideId];
  }
  constructor(private sliderService: SliderService) {
    this.sliderService.slides = this.questions;
    this.sliderService.modifyId(0);
    // console.log(this.message);
   }

  ngOnInit() {

  }

}
