import { Component, Injector } from '@angular/core';
import { UserModel } from '@model/user.model';
import { BaseListComponent } from '../../../../shared/component/base-component/base-list.component';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends BaseListComponent<UserModel> {
  protected validateBeforeAction(): boolean {
    return false;
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
