import { NgModule } from '@angular/core';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerFormComponent, CustomerDetailComponent, CustomerViewComponent],
  imports: [
    SharedModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
