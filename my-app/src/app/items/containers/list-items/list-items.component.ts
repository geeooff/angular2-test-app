import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  public collection: Observable<Item[]>;

  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    // this.sub = this.collectionService.collection.subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.collection = data;
    //   }
    // );
    this.collection = this.collectionService.collection;
  }

}
