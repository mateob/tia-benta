import { Injectable, Injector } from "@angular/core";
import { UserGroupModel } from '@model/userGroup.model';
import { BaseResourceService } from '@service/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService extends BaseResourceService<UserGroupModel> {
  constructor(protected injector: Injector) {
    super(injector, UserGroupModel);
  }
}
