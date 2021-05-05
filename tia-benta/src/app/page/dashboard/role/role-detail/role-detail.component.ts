import { Component, Injector } from '@angular/core';

import { RoleModel } from '@model/role.model';
import { BaseFormComponent } from '../../../../shared/component/base-component/base-form.component';
import { RoleService } from '../shared/role.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.scss']
})
export class RoleDetailComponent extends BaseFormComponent<RoleModel> {
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
