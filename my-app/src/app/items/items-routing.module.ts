import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';
import { AddItemComponent } from './containers/add-item/add-item.component';

const appRoutes: Routes = [
  { path: '', component: ListItemsComponent },
  { path: 'add', component: AddComponent },
  { path: 'add-item', component: AddItemComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  declarations: []
})
export class ItemsRoutingModule { }
