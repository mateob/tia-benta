import { PoDynamicFormField, PoDynamicViewField, PoTableColumn } from "@po-ui/ng-components";

export abstract class BaseModel {
  public id?: string;

  protected abstract buildForm(): Array<PoDynamicFormField>;
  get formFields(): Array<PoDynamicFormField> {
    return this.buildForm();
  }
  protected abstract buildView(): Array<PoDynamicViewField>;
  get viewFields(): Array<PoDynamicViewField> {
    return this.buildView();
  }
  protected abstract buildTable(): Array<PoTableColumn>;
  get tableColumns(): Array<PoTableColumn> {
    return this.buildTable();
  }
}
