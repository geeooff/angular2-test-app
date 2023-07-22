import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Item } from '../../shared/interfaces/item';
import { CollectionService } from './collection.service';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailResolverService  {

  constructor(
    private router: Router,
    private collectionService: CollectionService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    const id = parseInt(route.paramMap.get('id'), 10);
    return this.collectionService.getItemById(id).pipe(
      take(1),
      tap((data) => {
        console.log(data);
        if (data) {
          return data;
        } else {
          this.router.navigate(['/items']);
          return null;
        }
      })
    );
  }
}
