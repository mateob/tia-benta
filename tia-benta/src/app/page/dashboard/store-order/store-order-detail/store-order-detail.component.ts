import { Component, Injector } from '@angular/core';

import { StoreOrderModel } from '@model/store-order.model';
import { BaseFormComponent } from '../../../../shared/component/base-component/base-form.component';
import { StoreOrderService } from '../shared/store-order.service';

@Component({
  selector: 'app-store-order-detail',
  templateUrl: './store-order-detail.component.html',
  styleUrls: ['./store-order-detail.component.scss']
})

export class StoreOrderDetailComponent extends BaseFormComponent<StoreOrderModel> {
  protected validateBeforeAction(): boolean {
    return true;
  }

  protected onModalSave(): boolean {
    return true;
  }

  protected onModalCancel(): boolean {
    return true;
  }

  constructor(protected injector: Injector, protected storeOrderService: StoreOrderService) {
    super(injector, new StoreOrderModel(), storeOrderService);
  }
}


