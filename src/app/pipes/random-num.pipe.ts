import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomNum',
})
export class RandomNumPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    if (!args.length) return Math.ceil(Math.random() * value);
    if (args.length === 1)
      return Math.ceil(Math.random() * (value - args[0]) + args[0]);
    return 0;
  }
}