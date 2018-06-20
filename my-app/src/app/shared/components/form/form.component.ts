import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() newItem = new EventEmitter<Item>();
  public form: FormGroup;
  public intitules = Object.values(State);
  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      reference: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      state: State.ALIVRER
    });
  }

  public isError(formControlName: string): boolean {
    return this.form.get(formControlName).touched
        && this.form.get(formControlName).invalid;
  }

  public process(): void {
    console.log(this.form.value);
    this.newItem.emit(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }
}
