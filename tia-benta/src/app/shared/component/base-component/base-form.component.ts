import { Directive, Injector } from '@angular/core';
import { BaseModel } from '../../model/base/base.model';
import { BaseCrudCompoment } from './base-crud.component';
import { BaseResourceService } from '../../service/base-resource.service';
import { PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicFormValidation, PoDynamicViewField } from '@po-ui/ng-components';
import { ActionUrl } from '../../enum/action-url.enum';
import { MessageModel } from 'src/app/core/modal/message.model';

@Directive()
export abstract class BaseFormComponent<T extends BaseModel> extends BaseCrudCompoment<T> {

  public fields: PoDynamicFormField[];
  constructor(protected injector: Injector, public resource: T, protected resourceService: BaseResourceService<T>) {
    super(injector, resource, resourceService);
    console.log('Rota ', this.componentUrl, ' action ', this.currentAction);
    this.fields = this.getFields(resource);
  }

  protected getFields<T extends BaseModel>(entity: T): PoDynamicFormField[] {
    const fields = entity.formFields;
    if (this.currentAction === ActionUrl.EDIT) {
      const docuemnt = fields.find((x) => x.property === 'document');
      if (docuemnt) {
        docuemnt.disabled = true;
      }
    }
    return fields;
  }

  public validateFields(): boolean {
    return false;
  }

  public onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    const property = { value: {}, fields: Array<PoDynamicFormField | PoDynamicViewField>() };
    if (changedValue.property === 'personType') {
      const documentMask = changedValue.value.personType === 2 ? '999.999.999-99' : '99.999.999/9999-99';
      property.fields.push({
        property: 'document',
        mask: documentMask,
        disabled: false
      })
    }
    return property;
  }

  public async loadResouce(): Promise<T> {
    let auxResource: T;
    if (this.currentAction === ActionUrl.EDIT ||
      this.currentAction === ActionUrl.VIEW) {
      let paramID: string = '';
      this.route.params.subscribe((param) => paramID = param.id);
      auxResource = await this.resourceService.getById(paramID);
      if (!auxResource) {
        this.handlerError({ message: 'Ocorreu um erro no servidor, tente mais tarde', detailedMessage: 'link da documentação' } as MessageModel);
      } else {
        return auxResource;
      }
    }
    return Promise.resolve({} as T);
  }
}
