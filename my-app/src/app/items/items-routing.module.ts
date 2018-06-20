import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';

const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  declarations: []
})
export class ItemsRoutingModule { }
