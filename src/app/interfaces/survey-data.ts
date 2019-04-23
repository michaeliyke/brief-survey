
interface ISurveyDataStructure {
  [position: number]: SurveyData;
  length: number;
  push(item: SurveyData): number;
  json(): string;
  shift(data: SurveyData): number;
  // remove first item and return it;
  pop?(): any;
  // Remove last item and return it
concat(data?: SurveyData): any;
// Join arrays b, c, d,... to a and return the new array. Original unmodified
reverse?(): any;
// Produce a reversed version of original array;
unshift?(): any;
 // add first item and return it;
 sort?(): any;
indexOf?(): any;
slice?(): any;
splice?(): any;
lastIndexOf?(): any;
 some?(fn: (value?: any, index?: number, thisArg?: any) => any): boolean;
forEach?(fn: (value?: any, index?: number, thisArg?: any) => any): any;
map?(fn: (item?: string, index?: number, thisArg?: any) => any): SurveyData[];
filter?(fn: (item: string, index?: number, thisArg?: any) => any): SurveyData[];
  reduce?(combine: (base: any, next: any) => any): any;
reduceRight?(): any;
find?(): any;
findIndex?(): any;
findIndex?(fn: (value?: any, index?: number, thisArg?: any) => any): number;
// test through with fn and return the index of first elemet to comply or -1
every?(fn: (value?: any, index?: number, thisArg?: any) => void): boolean;
[Symbol.iterator]?(): any;
[Symbol.unscopables]?(): any;
includes?(): any;
}

export class SurveyData {
  question: string;
  answer: string | number;
  id: number;
  constructor(question: string, answer: string | number, id: number) {
    this.question = question;
    this.answer = answer;
    this.id = id;
   }
}


export class Survey implements ISurveyDataStructure {
  [name: string]: any;
  [key: number]: any;
  length: number;
  constructor() {
    this.length = 0;
  }

  add(question: string, answer: string | number, id: number): void {
    this.push(new SurveyData(question, answer, id));
  }

 push(data: SurveyData, replace: boolean = false): number {
   if (replace) {
     this.doReplace(data);
   } else {
     this[this.length++] = data;
    //  console.log('CODE HAS BEEN CALLED', JSON.stringify(this));
   }
   return this.length;
 }

 doReplace(data: SurveyData): number {
   let replaced = false;
   let spot: number;
   this.forEach((stale: SurveyData, index: number) => {
    if (data.id === stale.id) {
      replaced = true;
      spot = index;
      this[index] = data;
    }
   });
   return replaced ? spot : this.push(data);
 }

  forEach(fn: (item?: any, index?: number) => any): void {
    let index = 0;
    for (const datum of this as any) {
      fn.call( this, datum, index++, this);
    }
  }

  replace(indexId: number, fresh: SurveyData): Survey {
    let index = 0;
    for (const stale of this as any ) {
      if (indexId === index && (stale || stale)) {
        this[index++] = fresh;
        break;
      }
    }
    return this;
  }

  map(fn: (item: string) => any): SurveyData[] {
    const array: SurveyData[] = [];
    for (const element of this as any) {
      array.push(fn.call(this, element, this));
    }
    return array;
  }

  reduce(combine: (base: any, next: any) => any): any {
  let base = this[0];
  this.slice(1).forEach((element: any) => {
    base = combine(base, element);
  });
  return base;
}

  filter(fn: (item: string) => any): SurveyData[] {
    const array: SurveyData[] = [];
    let temp: any;
    for (const element of this as any) {
      temp = fn.call(this, element, this);
      if (temp) {
        array.push(temp);
      }
    }
    return array;
  }

  some(fn: (value?: any, index?: number, thisArg?: any) => any): boolean {
    const array: SurveyData[] = [];
    let bool = false;
    for (const element of this as any) {
      if (fn.call(this, element, this) === true) {
        bool = true;
        break;
      }
    }
    return bool;
  }

  every(fn): boolean {
    const array: SurveyData[] = [];
    let bool = true;
    for (const element of this as any) {
      if (fn.call(this, element, this) === false) {
        bool = false;
        break;
      }
    }
    return bool;
  }


  shift(data: SurveyData): number {
    const array: Array<SurveyData> = [];
    array.push(data);
    for (const datum of this as any) {
      array.push(datum);
    }
    let index = 0;
    for (const datum of array) {
      this[index++] = datum;
    }

    return 2;
  }
  concat(data: SurveyData): any {
    return 3;
  }
  json(): string {
    return JSON.stringify(this);
  }

}



/*

 else {
        this[0] = data;
        this.length++;
        console.log(this.length)
      }

      else {
            this[this.length] = data;
            this.length++;
          }

*/
