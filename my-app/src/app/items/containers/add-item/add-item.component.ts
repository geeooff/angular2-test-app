import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollectionService } from '../../../core/services/collection.service';
import { State } from '../../../shared/enums/state.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  public form: FormGroup;
  public intitules = Object.values(State);
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private collectionService: CollectionService
  ) {
    this.createForm();
  }

  ngOnInit() {
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
    this.collectionService.addItem(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
    this.router.navigate(['list']);
  }
}
