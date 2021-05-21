import { Component, Injector } from '@angular/core';
import { RoleModel } from '@model/role.model';
import { BaseListComponent } from '../../../../shared/component/base-component/base-list.component';
import { RoleService } from '../shared/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent extends BaseListComponent<RoleModel> {
  protected validateBeforeAction(): boolean {
    return false;
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
