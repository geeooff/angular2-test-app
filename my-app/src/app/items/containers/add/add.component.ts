import { Component, OnInit } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public intitules = Object.values(State);
  public newItem: Item;
  constructor() { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER
    };
  }
}
