import { Component, Injector } from '@angular/core';
import { UserGroupModel } from '@model/user-group.model';
import { BaseListComponent } from '../../../../shared/component/base-component/base-list.component';
import { UserGroupService } from '../shared/user-group.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './user-group-list.component.html',
  styleUrls: ['./user-group-list.component.scss']
})
export class UserGroupListComponent extends BaseListComponent<UserGroupModel> {
  protected validateBeforeAction(): boolean {
    return false;
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
