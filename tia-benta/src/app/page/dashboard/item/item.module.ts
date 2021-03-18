import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { ItemRoutingModule } from './item-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemViewComponent } from './item-view/item-view.component';


@NgModule({
  declarations: [ItemListComponent, ItemFormComponent, ItemDetailComponent, ItemViewComponent],
  imports: [
    SharedModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
