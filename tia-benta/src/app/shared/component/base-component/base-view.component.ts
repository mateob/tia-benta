import { Directive, Injector } from "@angular/core";
import { BaseModel } from "@model/base/base.model";
import { PoDynamicViewField } from "@po-ui/ng-components";
import { BaseResourceService } from "@service/base-resource.service";
import { BaseCrudCompoment } from "./base-crud.component";
import { ActionUrl } from '@enums/action-url.enum';
import { MessageModel } from "src/app/core/modal/message.model";

@Directive()
export abstract class BaseViewComponent<T extends BaseModel> extends BaseCrudCompoment<T> {

  public fields: PoDynamicViewField[];
  constructor(protected injector: Injector, public resource: T, protected resourceService: BaseResourceService<T>) {
    super(injector, resource, resourceService);

    this.fields = this.getFields(resource);
  }

  protected getFields<T extends BaseModel>(entity: T): PoDynamicViewField[] {
    const fields = entity.viewFields;
    return fields;
  }

  public async loadResouce(): Promise<T> {
    if (this.currentAction === ActionUrl.EDIT ||
      this.currentAction === ActionUrl.VIEW) {
      let paramID: string = '';
      this.route.params.subscribe((param) => paramID = param.id);
      const auxResource = await this.resourceService.getById(paramID);
      if (!auxResource) {
        this.handlerError({ message: 'Ocorreu um erro no servidor, tente mais tarde', detailedMessage: 'link da documentação' } as MessageModel);
      }
    }
    return this.resource;
  }

}
