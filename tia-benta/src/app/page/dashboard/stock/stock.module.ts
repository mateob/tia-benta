import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockViewComponent } from './stock-view/stock-view.component';


@NgModule({
  declarations: [StockDetailComponent, StockFormComponent, StockListComponent, StockViewComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
