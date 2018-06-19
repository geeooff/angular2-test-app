import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';

const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  declarations: []
})
export class ItemsRoutingModule { }
