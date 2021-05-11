import { Component, Injector } from '@angular/core';

import { StockModel } from '@model/stock.model';
import { StockService } from '../shared/stock.service';
import { BaseViewComponent } from '../../../../shared/component/base-component/base-view.component';

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.scss']
})
export class StockViewComponent extends BaseViewComponent<StockModel> {
  protected validateBeforeAction(): boolean {
    return true;
  }
  protected onModalSave(): boolean {
    return true;
  }
  protected onModalCancel(): boolean {
    return true;
  }

  constructor(protected injector: Injector, protected stockService: StockService) {
    super(injector, new StockModel(), stockService);
  }

}
