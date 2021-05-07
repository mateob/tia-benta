import { Injectable, Injector } from "@angular/core";
import { UserModel } from '@model/user.model';
import { BaseResourceService } from '@service/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseResourceService<UserModel> {
  constructor(protected injector: Injector) {
    super(injector, 'user', UserModel);
  }
}
