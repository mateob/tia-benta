import { Directive, Injector } from '@angular/core';
import { BaseModel } from "@model/base/base.model";
import { PoPopupAction, PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { BaseResourceComponente } from './base-resource.component';

@Directive()
export abstract class BaseActionComponent<T extends BaseModel> extends BaseResourceComponente {
  constructor(protected injector: Injector) {
    super(injector);
  }

  /**  Button Save */
  protected onSave(item: T) { };
  protected disableSave(): boolean { return false; }
  protected visibleSave(): boolean { return true; }
  private dataBtnSave(): PoPopupAction {
    return { label: 'Salvar', icon: '', action: this.onSave.bind(this), disabled: this.disableSave(), visible: this.visibleSave() };
  }
  public btnSave(): PoPageAction { return this.dataBtnSave(); }
  public tblSave(): PoTableAction { return this.dataBtnSave(); }
}
