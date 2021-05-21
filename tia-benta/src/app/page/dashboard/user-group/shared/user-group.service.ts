import { Injectable, Injector } from "@angular/core";
import { UserGroupModel } from '@model/user-group.model';
import { BaseResourceService } from '@service/base-resource.service';
import { EntityEnum } from '../../../../shared/enum/entity.enum';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService extends BaseResourceService<UserGroupModel> {
  constructor(protected injector: Injector) {
    super(injector, EntityEnum.USER_GROUP, UserGroupModel);
  }
}
