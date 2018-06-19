import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') nomClass: string;
  constructor() {
  }

  ngOnChanges(): void {
    this.nomClass = this.formatClass(this.appState);
  }

  private removeAccents(etat: string): string {
    return etat.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private formatClass(etat: State): string {
    const formattedNomClass = this.removeAccents(etat.toLowerCase()).replace(' ', '-');
    return `state-${formattedNomClass}`;
  }
}
