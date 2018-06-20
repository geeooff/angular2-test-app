import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../enums/state.enum';

@Pipe({
  name: 'super'
})
export class SuperPipe implements PipeTransform {

  transform(reference: string, state: State): any {
    let prefix: string;

    switch (state) {
      case State.ALIVRER:
        prefix = 'AL';
        break;

      case State.ENCOURS:
        prefix = 'EN';
        break;

      case State.LIVREE:
        prefix = 'LI';
        break;

      default:
        prefix = '??';
        break;
    }

    return `${prefix}-${reference}`;
  }

}
