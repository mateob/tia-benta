import { Component } from '@angular/core';
import { StockModel } from '@model/stock.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class CustomerListComponent {

  public fields = new StockModel().tableColumns;
  public resource = [
    { name: "teste", document: "123", id: "TS01", createAt: "01-02-2021", edit: "Editar" },
    { name: "Luis", document: "4312", id: "TS02", createAt: "01-02-2021", edit: "Não Editar" }
  ]
  constructor() { }
}
