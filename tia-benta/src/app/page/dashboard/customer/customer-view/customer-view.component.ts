import { Component, Injector } from '@angular/core';

import { CustomerModel } from '@model/customer.model';
import { CustomerService } from '../shared/customer.service';
import { BaseViewComponent } from '../../../../shared/component/base-component/base-view.component';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent extends BaseViewComponent<CustomerModel> {
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
