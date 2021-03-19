import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ActionUrl } from '@enums/action-url.enum';

const routes: Routes = [
  { path: ActionUrl.LIST, component: ItemListComponent },
  { path: ActionUrl.CREATE, component: ItemFormComponent },
  { path: `:id/${ActionUrl.EDIT}`, component: ItemDetailComponent },
  { path: `:id/${ActionUrl.VIEW}`, component: ItemViewComponent },
  { path: '**', redirectTo: ActionUrl.LIST }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
