import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailResolverService } from '../core/services/item-detail-resolver.service';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { EditComponent } from './containers/edit/edit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListItemsComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'add-item',
    component: AddItemComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    resolve: { item: ItemDetailResolverService }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ItemsRoutingModule { }
