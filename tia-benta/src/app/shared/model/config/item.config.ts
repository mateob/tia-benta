import { PoDynamicFormField, PoDynamicViewField, PoTableColumn } from '@po-ui/ng-components';
import { BaseModel } from '../base/base.model';

export class ItemConfig extends BaseModel {

  protected buildForm(): PoDynamicFormField[] {
    return [];
  }

  protected buildView(): PoDynamicViewField[] {
    return [];
  }

  protected buildTable(): PoTableColumn[] {
    return [
      { property: 'name', label: "Nome", width: "10%" },
      { property: "detail", label: "Descrição", width: "50%" },
      { property: 'quantity', label: "Quantidade", width: "5%" },
      { property: 'unit', label: "Unidade de Medida", width: "10%" }
    ]
  }
}
