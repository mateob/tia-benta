import { Component, Injector } from '@angular/core';
import { CustomerModel } from '@model/customer.model';
import { CustomerService } from '../shared/customer.service';
import { BaseFormComponent } from '../../../../shared/component/base-component/base-form.component';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent extends BaseFormComponent<CustomerModel> {

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
