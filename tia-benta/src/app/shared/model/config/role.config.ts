import { PoDynamicFormField, PoDynamicViewField, PoTableColumn } from '@po-ui/ng-components';
import { BaseModel } from '../base/base.model';

export class RoleConfig extends BaseModel {

  protected buildForm(): PoDynamicFormField[] {
    return [];
  }

  protected buildView(): PoDynamicViewField[] {
    return [];
  }

  protected buildTable(): PoTableColumn[] {
    return [];
  }
}
