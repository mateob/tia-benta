import { Component } from '@angular/core';

import { PoDynamicViewField, PoPageAction } from '@po-ui/ng-components';
import { CustomerModel } from '@model/customer.model';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {

  public fields: Array<PoDynamicViewField> = new CustomerModel().viewFields;
  public resource = {
    name: "teste", document: "12345678912"
  }

  readonly pageActions: Array<PoPageAction> = [];

  constructor() { }

}
