import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private _collection: Item[];
  constructor() {
    this.collection = COLLECTION;
  }

  /**
   * get collection
   */
  public get collection(): Item[] {
    return this._collection;
  }

  /**
   * set collection
   */
  public set collection(col: Item[]) {
    this._collection = col;
  }

  /**
   * get item from collection
   */

  /**
   * update item in collection
   */

  /**
   * delete item in collection
   */
}
