import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: ':id/edit', component: CustomerDetailComponent },
  { path: ':id/view', component: CustomerViewComponent },
  { path: 'create', component: CustomerFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
