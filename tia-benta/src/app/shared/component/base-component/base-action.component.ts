import { AfterContentChecked, Directive, Injector } from '@angular/core';
import { ActionUrl } from '@enums/action-url.enum';
import { BaseModel } from "@model/base/base.model";
import { PoPopupAction, PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { BaseResourceComponente } from './base-resource.component';

@Directive()
export abstract class BaseActionComponent<T extends BaseModel> extends BaseResourceComponente implements AfterContentChecked {
  constructor(protected injector: Injector) {
    super(injector);
  }

  ngAfterContentChecked(): void {
    this.setCurrentActions();
  }

  public pageActions: Array<PoPageAction> = [];
  public tableActions: Array<PoTableAction> = [];

  /**  Button Save */
  protected onSave(item: T) {
    this.redirectTo(this.componentUrl, item.id, ActionUrl.EDIT);
  };
  protected disableSave(): boolean { return false; }
  protected visibleSave(): boolean { return true; }
  private dataBtnSave(): PoPopupAction {
    return { label: 'Salvar', icon: '', action: this.onSave.bind(this), disabled: this.disableSave(), visible: this.visibleSave() };
  }
  public btnSave(): PoPageAction { return this.dataBtnSave(); }
  public tblSave(): PoTableAction { return this.dataBtnSave(); }

  /**Button Delete*/
  protected onDelete(item: T) {
    this.redirectToPrevious();
  };
  protected disableDelete(): boolean { return false; }
  protected visibleDelete(): boolean { return true; }
  private dataBtnDelete(): PoPopupAction {
    return { label: 'Excluir', icon: '', action: this.onDelete.bind(this), disabled: this.disableDelete(), visible: this.visibleDelete() };
  }
  public btnDelete(): PoPageAction { return this.dataBtnDelete(); }
  public tblDelete(): PoTableAction { return this.dataBtnDelete(); }

  /**Button Cancel*/
  protected onCancel() {
    this.redirectToPrevious();
  };
  protected disableCancel(): boolean { return false; }
  protected visibleCancel(): boolean { return true; }
  private dataBtnCancel(): PoPopupAction {
    return { label: 'Cancelar', icon: '', action: this.onCancel.bind(this), disabled: this.disableCancel(), visible: this.visibleCancel() };
  }
  public btnCancel(): PoPageAction { return this.dataBtnCancel(); }
  public tblCancel(): PoTableAction { return this.dataBtnCancel(); }

  /**Button Edit*/
  protected onEdit(item: T) {
    this.redirectTo(this.componentUrl, item.id, ActionUrl.EDIT);
  }
  protected disableEdit(): boolean { return false; }
  protected visibleEdit(): boolean { return true; }
  private dataBtnEdit(): PoPopupAction {
    return { label: 'Editar', icon: '', action: this.onEdit.bind(this), disabled: this.disableEdit(), visible: this.visibleEdit() };
  }
  public btnEdit(): PoPageAction { return this.dataBtnEdit(); }
  public tblEdit(): PoTableAction { return this.dataBtnEdit(); }

  /** Button Back */
  protected onBack() {
    this.redirectToPrevious();
  };
  protected disableBack(): boolean { return false; }
  protected visibleBack(): boolean { return true; }
  private dataBtnBack(): PoPopupAction {
    return { label: 'Valtar', icon: '', action: this.onBack.bind(this), disabled: this.disableBack(), visible: this.visibleBack() };
  }
  public btnBack(): PoPageAction { return this.dataBtnBack(); }
  public tblBack(): PoTableAction { return this.dataBtnBack(); }

  /** Button Save And New */
  protected onSaveAndNew(item: T) {
    this.resourceForm.reset();
  };
  protected disableSaveAndNew(): boolean { return false; }
  protected visibleSaveAndNew(): boolean { return true; }
  private dataBtnSaveAndNew(): PoPopupAction {
    return { label: 'Salvar e Novo', icon: '', action: this.onSaveAndNew.bind(this), disabled: this.disableSaveAndNew(), visible: this.visibleSaveAndNew() };
  }
  public btnSaveAndNew(): PoPageAction { return this.dataBtnSaveAndNew(); }
  public tblSaveAndNew(): PoTableAction { return this.dataBtnSaveAndNew(); }

  /** Button New */
  protected onNew() {
    this.redirectTo(this.componentUrl, ActionUrl.CREATE);
  };
  protected disableNew(): boolean { return false; }
  protected visibleNew(): boolean { return true; }
  private dataBtnNew(): PoPopupAction {
    return { label: 'Novo', icon: '', action: this.onNew.bind(this), disabled: this.disableNew(), visible: this.visibleNew() };
  }
  public btnNew(): PoPageAction { return this.dataBtnNew(); }
  public tblNew(): PoTableAction { return this.dataBtnNew(); }

  /** Button Clear */
  protected onClear() {
    this.resourceForm.reset();
  };
  protected disableClear(): boolean { return false; }
  protected visibleClear(): boolean { return true; }
  private dataBtnClear(): PoPopupAction {
    return { label: 'Limpar', icon: '', action: this.onClear.bind(this), disabled: this.disableClear(), visible: this.visibleClear() };
  }
  public btnClear(): PoPageAction { return this.dataBtnClear(); }
  public tblClear(): PoTableAction { return this.dataBtnClear(); }

  /** Button View */
  protected onView(item: T) {
    this.redirectTo(this.componentUrl, item.id, ActionUrl.VIEW);
  };
  protected disableView(): boolean { return false; }
  protected visibleView(): boolean { return true; }
  private dataBtnView(): PoPopupAction {
    return { label: 'Visualizar', icon: '', action: this.onView.bind(this), disabled: this.disableView(), visible: this.visibleView() };
  }
  public btnView(): PoPageAction { return this.dataBtnView(); }
  public tblView(): PoTableAction { return this.dataBtnView(); }

  /** Load das Actions default para pagina de edição */
  protected loadEditActions() {
    if (this.pageActions && !this.pageActions.length) {
      this.pageActions = [this.btnCancel(), this.btnSave(), this.btnClear(), this.btnDelete()];
    }
  }

  /** Load das Actions default para pagina de cadastro */
  protected loadCreateActions() {
    if (this.pageActions && !this.pageActions.length) {
      this.pageActions = [this.btnSave(), this.btnSaveAndNew(), this.btnCancel()];
    }
  }

  /** Load das Actions default para pagina de visualização */
  protected loadViewActions() {
    if (this.pageActions && !this.pageActions.length) {
      this.pageActions = [this.btnBack(), this.btnEdit()];
    }
  }

  /** Load das Actions default para pagina de listagem */
  protected loadListActions() {
    if (this.pageActions && !this.pageActions.length) {
      this.pageActions = [this.btnNew()];
      this.tableActions = [this.tblEdit(), this.tblView(), this.tblDelete()]
    }
  }

  /** Carrega as açẽos default conforme ActionUrl capturada pela rota. */
  protected setCurrentActions() {
    switch (this.currentAction) {
      case ActionUrl.CREATE:
        this.loadCreateActions();
        break;
      case ActionUrl.EDIT:
        this.loadEditActions();
        break;
      case ActionUrl.VIEW:
        this.loadViewActions()
        break;
      case ActionUrl.LIST:
        this.loadListActions();
        break;
    }
  }

}
