import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { StateButtonComponent } from './components/state-button/state-button.component';
import { AddComponent } from './containers/add/add.component';
import { AddItemComponent } from './containers/add-item/add-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ListItemsComponent, ItemComponent, StateButtonComponent, AddComponent, AddItemComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
