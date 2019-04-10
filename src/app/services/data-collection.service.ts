import { Injectable } from '@angular/core';
import { IDataModel } from '../interfaces/idata-model';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {
  dataModel: Array<IDataModel> = [];
  constructor() {}
  addChoice(dataModel: IDataModel): void {
    this.dataModel.push(dataModel);
  }
}
