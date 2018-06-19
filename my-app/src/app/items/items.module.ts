import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { StateButtonComponent } from './components/state-button/state-button.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ListItemsComponent, ItemComponent, StateButtonComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
