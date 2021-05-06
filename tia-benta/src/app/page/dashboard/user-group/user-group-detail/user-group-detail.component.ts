import { Component, Injector } from '@angular/core';

import { UserGroupModel } from '@model/user-group.model';
import { BaseFormComponent } from '../../../../shared/component/base-component/base-form.component';
import { UserGroupService } from '../shared/user-group.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './user-group-detail.component.html',
  styleUrls: ['./user-group-detail.component.scss']
})
export class UserGroupDetailComponent extends BaseFormComponent<UserGroupModel> {
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
