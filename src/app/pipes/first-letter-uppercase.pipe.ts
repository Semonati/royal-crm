import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUppercase'
})
export class FirstLetterUppercasePipe implements PipeTransform {

  transform(value: string): string {
    const word = value.trim();
    return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();
  }
}
