import { Injectable, Injector } from "@angular/core";
import { UserGroupModel } from '@model/user-group.model';
import { BaseResourceService } from '@service/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService extends BaseResourceService<UserGroupModel> {
  constructor(protected injector: Injector) {
    super(injector, 'user-group', UserGroupModel);
  }
}
