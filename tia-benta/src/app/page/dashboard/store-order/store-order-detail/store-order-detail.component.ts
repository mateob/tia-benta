import { Component } from '@angular/core';

import { PoDynamicFormField, PoPageAction } from '@po-ui/ng-components';
import { StoreOrderModel } from '@model/store-order.model';

@Component({
  selector: 'app-store-order-detail',
  templateUrl: './store-order-detail.component.html',
  styleUrls: ['./store-order-detail.component.scss']
})

export class StoreOrderDetailComponent {
  public fields: Array<PoDynamicFormField> = new StoreOrderModel().formFields;
  public resource: StoreOrderModel = new StoreOrderModel();

  readonly pageActions: Array<PoPageAction> = [];

  constructor() { }

  getForm(item: any) {
    console.log(item.form.value);
  }
}

