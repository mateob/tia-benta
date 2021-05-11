import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { StockRoutingModule } from './stock-routing.module';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockListComponent} from './stock-list/stock-list.component';
import { StockViewComponent } from './stock-view/stock-view.component';


@NgModule({
  declarations: [StockDetailComponent, StockFormComponent, StockListComponent, StockViewComponent],
  imports: [
    SharedModule,
    StockRoutingModule
  ]
})
export class StockModule { }
