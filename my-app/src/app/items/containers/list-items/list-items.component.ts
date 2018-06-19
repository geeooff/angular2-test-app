import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  public collection: Item[];
  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.collection = this.collectionService.collection;
  }

}
