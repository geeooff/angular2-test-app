import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state.directive';
import { FormComponent } from './components/form/form.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    NavComponent,
    FormComponent,
    StateDirective,
    FilterPipe
  ],
  exports: [
    NavComponent,
    FormComponent,
    StateDirective,
    FilterPipe
  ]
})
export class SharedModule { }
