import { Component, Injector } from '@angular/core';
import { StoreOrderModel } from '@model/store-order.model';
import { StoreOrderService } from '../shared/store-order.service';
import { BaseFormComponent } from '../../../../shared/component/base-component/base-form.component';
@Component({
  selector: 'app-store-order-form',
  templateUrl: './store-order-form.component.html',
  styleUrls: ['./store-order-form.component.scss']
})
export class StoreOrderFormComponent extends BaseFormComponent<StoreOrderModel> {

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
