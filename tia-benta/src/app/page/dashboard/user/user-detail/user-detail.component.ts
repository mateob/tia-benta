import { Component, Injector } from '@angular/core';

import { UserModel } from '@model/user.model';
import { BaseFormComponent } from '../../../../shared/component/base-component/base-form.component';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent extends BaseFormComponent<UserModel> {
  protected validateBeforeAction(): boolean {
    return true;
  }

  protected onModalSave(): boolean {
    return true;
  }

  protected onModalCancel(): boolean {
    return true;
  }

  constructor(protected injector: Injector, protected userService: UserService) {
    super(injector, new UserModel(), userService);
  }

}
