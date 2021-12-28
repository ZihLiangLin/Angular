import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSD2TWD'
})
export class USD2TWDPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * 27.9;
  }

}
