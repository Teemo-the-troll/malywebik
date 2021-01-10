import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, length: number, replacement: string): unknown {
    if (value.length < length) {
      return value;
    }
    else {
      return value.substr(0, length) + replacement;
    }
  }

}
