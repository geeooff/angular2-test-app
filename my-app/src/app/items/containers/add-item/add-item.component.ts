import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  public item: Item;
  constructor(
    private router: Router,
    private collectionService: CollectionService
  ) {

  }

  ngOnInit() {
  }

  public add(item: Item): void {
    this.collectionService.addItem(item);
    this.router.navigate(['list']);
  }
}
