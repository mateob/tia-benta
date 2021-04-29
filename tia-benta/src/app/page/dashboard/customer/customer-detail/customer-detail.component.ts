import { Component, Injector } from '@angular/core';

import { CustomerModel } from '@model/customer.model';
import { BaseFormComponent } from '../../../../shared/component/base-component/base-form.component';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent extends BaseFormComponent<CustomerModel> {
  protected validateBeforeAction(): boolean {
    return true;
  }

  protected onModalSave(): boolean {
    return true;
  }

  protected onModalCancel(): boolean {
    return true;
  }

  constructor(protected injector: Injector, protected customerService: CustomerService) {
    super(injector, new CustomerModel(), customerService);
  }
}
