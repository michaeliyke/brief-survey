import { IQuestion } from './iquestion';
export interface ISlide {
  slideIndex: number;
  questions: Array<IQuestion>;
}
