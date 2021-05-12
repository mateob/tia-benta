import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionUrl } from '@enums/action-url.enum';
import { StoreOrderDetailComponent } from './store-order-detail/store-order-detail.component';
import { StoreOrderFormComponent } from './store-order-form/store-order-form.component';
import { StoreOrderListComponent } from './store-order-list/store-order-list.component';
import { StoreOrderViewComponent } from './store-order-view/store-order-view.component';

const routes: Routes = [
  { path: ActionUrl.LIST, component: StoreOrderListComponent },
  { path: `:id/${ActionUrl.EDIT}`, component: StoreOrderDetailComponent },
  { path: `:id/${ActionUrl.VIEW}`, component: StoreOrderViewComponent },
  { path: ActionUrl.CREATE, component: StoreOrderFormComponent },
  { path: '**', redirectTo: ActionUrl.LIST }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreOrderRoutingModule { }
