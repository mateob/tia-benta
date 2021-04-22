import { Directive, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionUrl } from '@enums/action-url.enum';
import { BaseModalComponent } from './base-modal.component';
import { Utils } from '../../utils/utils';

@Directive()
export abstract class BaseResourceComponente extends BaseModalComponent {

  public componentUrl: string;
  protected currentAction: string = '';
  protected route: ActivatedRoute;
  protected router: Router;
  protected hasChanges: boolean = false;
  // protected isLoading: boolean;

  constructor(protected injector: Injector) {
    super(injector);
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);

    const rootOfCurrentPath = this.route.snapshot.parent?.pathFromRoot[1].url[0].path;
    const pathOfCurrentPath = this.route.snapshot.parent?.url[0].path || "";
    this.componentUrl = `${rootOfCurrentPath}/${pathOfCurrentPath}`
    this.route.snapshot.url.forEach((url) => {
      if (Utils.validateKeyOfEnum(ActionUrl, url.path)) {
        this.currentAction = url.path;
      }
    });
  }

  @ViewChild('resourceForm', { static: true })
  resourceForm!: NgForm;

  public getForm(form: NgForm) {
    this.resourceForm = form;
  }

  public redirectToPrevious(validateChanges: boolean = true): void {
    if (this.hasChanges && validateChanges) {
      this.confirm('Mudanças pendentes!', 'As alterações serão descartadas, deseja prossegir?', () => this.redirectTo(this.componentUrl));
    } else {
      this.redirectTo(this.componentUrl);
    }
  }

  protected redirectTo(path: string): void;
  protected redirectTo(path: string, id: string): void;
  protected redirectTo(path: string, id: string, action: ActionUrl): void;
  protected redirectTo(path: string, action: ActionUrl): void;
  protected redirectTo(path?: string, id?: string, action?: ActionUrl): void {
    const pathToRote: string = path || this.componentUrl;
    this.router
      .navigateByUrl(pathToRote, { skipLocationChange: true })
      .then(() => this.router.navigate([pathToRote, id || '', action || '']));
  }

}
