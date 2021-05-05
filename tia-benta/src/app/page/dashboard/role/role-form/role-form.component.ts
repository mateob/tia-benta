import { Component, Injector } from '@angular/core';
import { RoleModel } from '@model/role.model';
import { RoleService } from '../shared/role.service';
import { BaseFormComponent } from '../../../../shared/component/base-component/base-form.component';

@Component({
  selector: 'app-customer-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent extends BaseFormComponent<RoleModel> {

  protected validateBeforeAction(): boolean {
    return true;
  }

  protected onModalSave(): boolean {
    return true;
  }

  protected onModalCancel(): boolean {
    return true;
  }

  constructor(protected injector: Injector, protected roleService: RoleService) {
    super(injector, new RoleModel(), roleService);
  }

}
