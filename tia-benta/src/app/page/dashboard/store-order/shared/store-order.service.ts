import { Injectable, Injector } from "@angular/core";
import { StoreOrderModel } from '@model/store-order.model';
import { BaseResourceService } from '@service/base-resource.service';
import { EntityEnum } from '../../../../shared/enum/entity.enum';

@Injectable({
  providedIn: 'root'
})
export class StoreOrderService extends BaseResourceService<StoreOrderModel> {
  constructor(protected injector: Injector) {
    super(injector, EntityEnum.STORE_ORDER, StoreOrderModel);
  }
}
