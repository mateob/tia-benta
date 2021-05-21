import { Injectable, Injector } from "@angular/core";
import { RoleModel } from '@model/role.model';
import { BaseResourceService } from '@service/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseResourceService<RoleModel> {
  constructor(protected injector: Injector) {
    super(injector, 'role', RoleModel);
  }
}
