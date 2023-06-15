import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToogleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = true ): string {
    return (toUpper)
    ? value.toUpperCase()
    : value.toLowerCase()
  }
}
