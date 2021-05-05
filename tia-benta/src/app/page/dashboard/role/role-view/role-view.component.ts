import { Component, Injector } from '@angular/core';

import { RoleModel } from '@model/role.model';
import { RoleService } from '../shared/role.service';
import { BaseViewComponent } from '../../../../shared/component/base-component/base-view.component';

@Component({
  selector: 'app-customer-view',
  templateUrl: './role-view.component.html',
  styleUrls: ['./role-view.component.scss']
})
export class RoleViewComponent extends BaseViewComponent<RoleModel> {
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
