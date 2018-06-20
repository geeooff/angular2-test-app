import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { StateButtonComponent } from './components/state-button/state-button.component';
import { AddComponent } from './containers/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule,
    FormsModule
  ],
  declarations: [ListItemsComponent, ItemComponent, StateButtonComponent, AddComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
