import { Directive, Injector } from "@angular/core";
import { BaseModel } from "@model/base/base.model";
import { BaseResourceService } from "@service/base-resource.service";
import { BaseActionComponent } from './base-action.component';

@Directive()
export abstract class BaseCrudCompoment<T extends BaseModel> extends BaseActionComponent<T> {
  constructor(
    protected injector: Injector,
    protected resource: T,
    protected resourceService: BaseResourceService<T>
  ) {
    super(injector);
  }

  protected abstract validateBeforeAction(): boolean;

  public onSave(item: T) {
    if (this.validateBeforeAction()) {
      this.resourceService.create(item);
    }
  }
}
