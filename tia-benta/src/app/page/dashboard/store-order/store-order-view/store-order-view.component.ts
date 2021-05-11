import { Component, Injector } from '@angular/core';

import { StoreOrderModel } from '@model/store-order.model';
import { StoreOrderService } from '../shared/store-order.service';
import { BaseViewComponent } from '../../../../shared/component/base-component/base-view.component';

@Component({
  selector: 'app-store-order-view',
  templateUrl: './store-order-view.component.html',
  styleUrls: ['./store-order-view.component.scss']
})
export class StoreOrderViewComponent extends BaseViewComponent<StoreOrderModel> {
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

