import { Directive, Injector } from "@angular/core";
import { BaseModel } from '@model/base/base.model';
import { BaseCrudCompoment } from './base-crud.component';
import { PoTableColumn } from '@po-ui/ng-components';
import { BaseResourceService } from '@service/base-resource.service';
import { ActionUrl } from '../../enum/action-url.enum';
import { MessageModel } from 'src/app/core/modal/message.model';

@Directive()
export abstract class BaseListComponent<T extends BaseModel> extends BaseCrudCompoment<T> {
  public columns: PoTableColumn[];
  public resources: T[] = [];
  constructor(protected injector: Injector, public resource: T, protected resourceService: BaseResourceService<T>) {
    super(injector, resource, resourceService);

    this.columns = this.getFields(resource);
    this.loadResouce();
  }

  protected getFields<T extends BaseModel>(entity: T): PoTableColumn[] {
    const fields = entity.tableColumns;
    return fields;
  }

  public async loadResouce() {
    if (this.currentAction === ActionUrl.LIST) {
      this.resources = await this.resourceService.getAll();
      if (!this.resources) {
        this.handlerError({ message: 'Ocorreu um erro no servidor, tente mais tarde', detailedMessage: 'link da documentação' } as MessageModel);
      }
    }
    return this.resources;
  }
}
