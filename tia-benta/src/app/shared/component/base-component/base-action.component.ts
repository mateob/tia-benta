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

  /**Button Delete*/
  protected onDelete(item: T) { };
  protected disableDelete(): boolean { return false; }
  protected visibleDelete(): boolean { return true; }
  private dataBtnDelete(): PoPopupAction {
    return { label: 'Excluir', icon: '', action: this.onDelete.bind(this), disabled: this.disableDelete(), visible: this.visibleDelete() };
  }
  public btnDelete(): PoPageAction { return this.dataBtnDelete(); }
  public tblDelete(): PoTableAction { return this.dataBtnDelete(); }

  /**Button Cancel*/
  protected onCancel(item: T) { };
  protected disableCancel(): boolean { return false; }
  protected visibleCancel(): boolean { return true; }
  private dataBtnCancel(): PoPopupAction {
    return { label: 'Cancelar', icon: '', action: this.onCancel.bind(this), disabled: this.disableCancel(), visible: this.visibleCancel() };
  }
  public btnCancel(): PoPageAction { return this.dataBtnCancel(); }
  public tblCancel(): PoTableAction { return this.dataBtnCancel(); }

 /**Button Edit*/
 protected onEdit(item: T) { };
 protected disableEdit(): boolean { return false; }
 protected visibleEdit(): boolean { return true; }
 private dataBtnEdit(): PoPopupAction {
   return { label: 'Editar', icon: '', action: this.onEdit.bind(this), disabled: this.disableEdit(), visible: this.visibleEdit() };
 }
 public btnEdit(): PoPageAction { return this.dataBtnEdit(); }
 public tblEdit(): PoTableAction { return this.dataBtnEdit(); }
}
