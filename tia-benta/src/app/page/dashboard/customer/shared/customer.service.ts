import { Injectable, Injector } from "@angular/core";
import { CustomerModel } from '@model/customer.model';
import { BaseResourceService } from '@service/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseResourceService<CustomerModel> {
  constructor(protected injector: Injector) {
    super(injector, 'customer', CustomerModel);
  }
}
