import { PoDynamicFormField, PoDynamicViewField, PoTableColumn } from '@po-ui/ng-components';
import { BaseModel } from '../base/base.model';
import { ItemModel } from '../item.model';

export class RecipeConfig extends BaseModel {

  protected buildForm(): PoDynamicFormField[] {
    return []
  }

  protected buildView(): PoDynamicViewField[] {
    return [];
  }

  protected buildTable(): PoTableColumn[] {
    return [
      { property: 'name', label: 'Nome', width: '25%' },
      { property: 'price', label: 'Preço', type: 'currency', format: 'BRL' },
      {
        property: 'items',
        label: 'Items da Receita',
        type: 'detail',
        detail: {
          columns: new ItemModel().tableColumns,
          typeHeader: 'top'
        }
      },
    ]
  }

}
