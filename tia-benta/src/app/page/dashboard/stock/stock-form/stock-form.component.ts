import { Component, Injector } from '@angular/core';
import { StockModel } from '@model/stock.model';
import { StockService } from '../shared/stock.service';
import { BaseFormComponent } from '../../../../shared/component/base-component/base-form.component';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent extends BaseFormComponent<StockModel> {

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
