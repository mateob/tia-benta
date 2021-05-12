import { Component, Injector } from '@angular/core';
import { StoreOrderModel } from '@model/store-order.model';
import { BaseListComponent } from '../../../../shared/component/base-component/base-list.component';
import { StoreOrderService } from '../shared/store-order.service';
@Component({
  selector: 'app-store-order-list',
  templateUrl: './store-order-list.component.html',
  styleUrls: ['./store-order-list.component.scss']
})
export class StoreOrderListComponent extends BaseListComponent<StoreOrderModel> {
  protected validateBeforeAction(): boolean {
    return false;
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
