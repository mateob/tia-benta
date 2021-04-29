import { Component, Injector } from '@angular/core';
import { UserModel } from '@model/user.model';
import { UserService } from '../shared/user.service';
import { BaseViewComponent } from '../../../../shared/component/base-component/base-view.component';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent extends BaseViewComponent<UserModel> {
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
