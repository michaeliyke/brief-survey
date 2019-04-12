import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringDelimiter'
})
export class StringDelimiterPipe implements PipeTransform {

  transform(str: string, delimiter?: string): any {
    return str.replace(/\s+/g, delimiter);
  }

}
