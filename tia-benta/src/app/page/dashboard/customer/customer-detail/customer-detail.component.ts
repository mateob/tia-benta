import { Component } from '@angular/core';

import { PoDynamicFormField, PoPageAction } from '@po-ui/ng-components';
import { CustomerModel } from '@model/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {
  public fields: Array<PoDynamicFormField> = new CustomerModel().formFields;
  public resource: CustomerModel = new CustomerModel(
    "Mateo Barrios", "12345678912"
  );

  readonly pageActions: Array<PoPageAction> = [];

  constructor() { }

  getForm(item: any) {
    console.log(item.form.value);
  }
}
