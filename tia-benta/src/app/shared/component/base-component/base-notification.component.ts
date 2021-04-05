
import { Directive, Injector } from '@angular/core';
import { PoDialogService, PoNotification, PoNotificationService, PoToasterOrientation, PoToasterType } from '@po-ui/ng-components';
import { MessageModel } from '../../../core/modal/message.model';

@Directive()
export abstract class BaseNotificationComponent {
  constructor(protected injector: Injector) {
    this.notification = injector.get(PoNotificationService);
    this.poAlert = injector.get(PoDialogService);
  }

  public notification: PoNotificationService;
  protected poAlert: PoDialogService;

  public alert(title: string, message: string, func: Function = () => { }) {
    this.poAlert.alert({ title, message, ok: func });
  }

  public confirm(title: string, message: string, confirm: Function = () => { }) {
    this.poAlert.confirm({ title, message, confirm });
  }

  public handlerError(error: MessageModel): void {
    this.handlerNotification(`${error.message} \t ${error.detailedMessage}`, PoToasterType.Error);
  }

  public handlerSuccess(message: string): void {
    this.handlerNotification(message);
  }

  public handlerNotification(message: string): void;
  public handlerNotification(message: string, type: number): void;
  public handlerNotification(message: string, type: number, duration: number): void;
  public handlerNotification(message: string, type: number, duration: number, action: Function, actionLabel: string): void;
  public handlerNotification(message: string, type: number = PoToasterType.Success, duration: number = 6000, action?: Function, actionLabel?: string): void {
    this.startNotification(type, {
      message, duration, orientation: PoToasterOrientation.Bottom, action, actionLabel
    });
  }

  private startNotification(type: number, toaster: PoNotification) {
    switch (type) {
      case PoToasterType.Success: {
        this.notification.success(toaster);
        break;
      }
      case PoToasterType.Error: {
        this.notification.error(toaster);
        break;
      }
      case PoToasterType.Warning: {
        this.notification.warning(toaster);
        break;
      }
      case PoToasterType.Information: {
        this.notification.information(toaster);
        break;
      }
      default: {
        this.notification.success(toaster);
        break;
      }
    }
  }
}
