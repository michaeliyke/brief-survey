import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [SliderComponent]
})
export class SliderModule {}
