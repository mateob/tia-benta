import { Component, Injector } from '@angular/core';
import { StockModel } from '@model/stock.model';
import { BaseViewComponent } from 'src/app/shared/component/base-component/base-view.component';
import { StockService } from '../shared/stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent extends BaseViewComponent<StockModel> {
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
