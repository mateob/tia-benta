import { Injectable, Injector } from "@angular/core";
import { ItemModel } from '@model/item.model';
import { BaseResourceService } from '@service/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends BaseResourceService<ItemModel> {
  constructor(protected injector: Injector) {
    super(injector, ItemModel);
  }
}
