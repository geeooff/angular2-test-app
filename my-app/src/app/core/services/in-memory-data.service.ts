// import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { COLLECTION } from '../collection';

// @Injectable({
//   providedIn: 'root'
// })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {COLLECTION};
  }
}
