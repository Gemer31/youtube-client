import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  public transform(value: Date, ...args: Date[]): string {
    const currentDate: Date = new Date();
    // const monthInMilliseconds: number = 2628000000;
    // const dayInMilliseconds: number = 86400000;
    const difference: number = +currentDate - +value;
    let lineName: string;

    if (difference < 7 * 86400000) {
      lineName = 'blue-line';
    } else if (difference < 2628000000) {
      lineName = 'green-line';
    } else if (difference > 2628000000) {
      lineName = 'red-line';
    }
    return lineName;
  }

}
