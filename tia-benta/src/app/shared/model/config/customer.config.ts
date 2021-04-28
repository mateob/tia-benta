import { PoDynamicFieldType, PoDynamicFormField, PoDynamicViewField, PoTableColumn } from '@po-ui/ng-components';
import { BaseModel } from '../base/base.model';

export class CustomerConfig extends BaseModel {
  protected buildForm(): PoDynamicFormField[] {
    return [
      {
        property: 'name',
        label: 'Nome Completo',
        required: true,
        minLength: 2,
        pattern: '[A-Z][a-z]*',
        errorMessage:
          'O nome completo deve ser informado (iniciando com letra maiúscula).',
        gridColumns: 4,
        gridMdColumns: 4,
        gridSmColumns: 12
      },
      {
        property: 'document',
        label: 'Documento CPF',
        mask: '999.999.999-99',
        type: PoDynamicFieldType.Number,
        optional: true,
        gridColumns: 4,
        gridMdColumns: 4,
        gridSmColumns: 12
      },
    ];
  }
  protected buildView(): PoDynamicViewField[] {
    return [
      { property: 'name', label: 'Nome Completo', gridColumns: 4, gridMdColumns: 4, gridSmColumns: 12 },
      { property: 'document', label: 'Documento CPF', gridColumns: 4, gridMdColumns: 4, gridSmColumns: 12 },
    ]
  }
  protected buildTable(): PoTableColumn[] {
    return [
      { property: 'name', label: 'Nome Completo', width: '30%' },
      { property: 'document', label: 'Documento CPF', width: '40%' },
    ]
  }
}
