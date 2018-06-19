import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    NavComponent,
    StateDirective
  ],
  exports: [
    NavComponent,
    StateDirective
  ]
})
export class SharedModule { }
