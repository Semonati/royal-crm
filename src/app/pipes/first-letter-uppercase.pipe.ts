import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUppercase'
})
export class FirstLetterUppercasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const letter = value.toLocaleLowerCase();
    const temp = this.changeToUppercase(letter);
    return temp;
  }

  changeToUppercase(temp: string) {
    let letter: string = temp.charAt(0).toUpperCase();
    for (let i = 0; i < temp.length; i++) {
      if (i !== 0) {
        letter += temp[i];
      }
    }  
    return letter;
  }
}
