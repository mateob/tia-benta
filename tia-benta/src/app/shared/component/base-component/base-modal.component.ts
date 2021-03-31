import { Directive, Injector, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { BaseNotificationComponent } from './base-notification.component';

@Directive()
export abstract class BaseModalComponent extends BaseNotificationComponent {
  constructor(protected injector: Injector) {
    super(injector);
  }

  @ViewChild(PoModalComponent, { static: true })
  poModal!: PoModalComponent;

  public poModalTitle: string = "";
  protected primaryActionLabel: string = "Salvar";
  public primaryAction: PoModalAction = {
    action: () => this.onPrimaryAction(),
    label: this.primaryActionLabel,
  }

  protected secundaryActionLabel: string = "Cancelar";
  public secundaryAction: PoModalAction = {
    action: () => this.onSecundaryAction(),
    label: this.secundaryActionLabel
  }

  public onShowModal(title: string = "Titulo da Modal") {
    this.poModalTitle = title;
    this.poModal.open();
  }

  public onPrimaryAction(): void {
    if (this.onModalSave()) {
      this.poModal.close();
    }
  }

  public onSecundaryAction(): void {
    if (this.onModalCancel()) {
      this.poModal.close();
    }
  }

  protected abstract onModalSave(): boolean;
  protected abstract onModalCancel(): boolean;
}
