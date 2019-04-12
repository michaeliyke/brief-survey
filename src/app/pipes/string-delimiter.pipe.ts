import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringDelimiter'
})
export class StringDelimiterPipe implements PipeTransform {

  transform(str: string, delimiter: string): string {
    try {
      return str.replace(/\s+/g, delimiter);
    } catch (err) {
      return String(str).replace(/\s+/g, delimiter);
    }
  }

}
