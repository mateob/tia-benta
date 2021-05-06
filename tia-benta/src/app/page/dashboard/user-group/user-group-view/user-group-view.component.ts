import { Component, Injector } from '@angular/core';

import { UserGroupModel } from '@model/user-group.model';
import { UserGroupService } from '../shared/user-group.service';
import { BaseViewComponent } from '../../../../shared/component/base-component/base-view.component';

@Component({
  selector: 'app-customer-view',
  templateUrl: './user-group-view.component.html',
  styleUrls: ['./user-group-view.component.scss']
})
export class UserGroupViewComponent extends BaseViewComponent<UserGroupModel> {
  protected validateBeforeAction(): boolean {
    return true;
  }
  protected onModalSave(): boolean {
    return true;
  }
  protected onModalCancel(): boolean {
    return true;
  }

  constructor(protected injector: Injector, protected userGroupService: UserGroupService) {
    super(injector, new UserGroupModel(), userGroupService);
  }

}
