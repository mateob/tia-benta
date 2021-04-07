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

  public async onSave(item: T) {
    if (this.validateBeforeAction()) {
      const newItem = await this.resourceService.create(item);
      super.onSave(newItem);
    }
  }

  public async onDelete(item: T) {
    await this.resourceService.delete(item.id);
    super.onDelete(item);
  }

  public async onSaveAndNew(item: T) {
    if (this.validateBeforeAction()) {
      await this.resourceService.create(item);
      super.onSaveAndNew(item);
    }
  }

}
