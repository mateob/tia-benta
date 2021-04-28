import { Component, Injector } from '@angular/core';
import { CustomerModel } from '@model/customer.model';
import { BaseListComponent } from '../../../../shared/component/base-component/base-list.component';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent extends BaseListComponent<CustomerModel> {
  protected validateBeforeAction(): boolean {
    return false;
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
