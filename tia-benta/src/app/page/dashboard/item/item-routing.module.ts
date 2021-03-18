import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemViewComponent } from './item-view/item-view.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'create', component: ItemFormComponent },
  { path: ':id/edit', component: ItemDetailComponent },
  { path: ':id/view', component: ItemViewComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
