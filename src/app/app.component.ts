import { Component, OnInit } from '@angular/core';
import { SliderService } from './services/slider.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tut Pro School Survey';

  get slideId(): number {
    return this.sliderService.slideId;
  }

  constructor(private sliderService: SliderService) {}

  ngOnInit(){}
 
}
