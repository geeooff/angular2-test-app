import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() editItem: Item;
  @Output() newItem = new EventEmitter<Item>();
  public form: FormGroup;
  public intitules = Object.values(State);
  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    console.log(this.editItem);
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: [
        this.editItem ? this.editItem.name : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      reference: [
        this.editItem ? this.editItem.reference : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      state: this.editItem ? this.editItem.state : State.ALIVRER
    });
  }

  public isError(formControlName: string): boolean {
    return this.form.get(formControlName).touched
        && this.form.get(formControlName).invalid;
  }

  private getItem(): Item {
    const data = this.form.value as Item;
    if (!this.editItem) {
      return data;
    } else {
      const id = this.editItem.id;
      return { id, ...data };
    }
  }

  public process(): void {
    const data = this.getItem();
    console.log(data);
    this.newItem.emit(data);
    if (!data.id) {
      this.form.reset();
      this.form.get('state').setValue(State.ALIVRER);
    }
  }
}
