import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from '../../../core/services/collection.service';
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
  constructor(
    private router: Router,
    private collectionService: CollectionService
  ) { }

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

  public process(): void {
    console.log(this.newItem);
    this.collectionService.addItem(this.newItem);
    this.init();
    this.router.navigate(['list']);
  }
}