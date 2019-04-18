import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StringDelimiterPipe } from '../pipes/string-delimiter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SliderComponent, StringDelimiterPipe],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [SliderComponent, StringDelimiterPipe]
})
export class SliderModule {}
