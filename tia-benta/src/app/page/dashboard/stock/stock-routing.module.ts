import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionUrl } from '@enums/action-url.enum';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockViewComponent } from './stock-view/stock-view.component';

const routes: Routes = [
  { path: ActionUrl.LIST, component: StockListComponent },
  { path: `:id/${ActionUrl.EDIT}`, component: StockDetailComponent },
  { path: `:id/${ActionUrl.VIEW}`, component: StockViewComponent },
  { path: ActionUrl.CREATE, component: StockFormComponent },
  { path: '**', redirectTo: ActionUrl.LIST }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
