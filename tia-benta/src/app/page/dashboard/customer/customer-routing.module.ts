import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ActionUrl } from '@enums/action-url.enum';

const routes: Routes = [
  { path: ActionUrl.LIST, component: CustomerListComponent },
  { path: `:id/${ActionUrl.EDIT}`, component: CustomerDetailComponent },
  { path: `:id/${ActionUrl.VIEW}`, component: CustomerViewComponent },
  { path: ActionUrl.CREATE, component: CustomerFormComponent },
  { path: '**', redirectTo: ActionUrl.LIST }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
