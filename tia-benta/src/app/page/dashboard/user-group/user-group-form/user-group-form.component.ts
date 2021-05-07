import { Component, Injector } from '@angular/core';
import { UserGroupModel } from '@model/user-group.model';
import { UserGroupService } from '../shared/user-group.service';
import { BaseFormComponent } from '../../../../shared/component/base-component/base-form.component';

@Component({
  selector: 'app-user-group-form',
  templateUrl: './user-group-form.component.html',
  styleUrls: ['./user-group-form.component.scss']
})
export class UserGroupFormComponent extends BaseFormComponent<UserGroupModel> {

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
