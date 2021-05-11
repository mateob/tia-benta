import { Component } from '@angular/core';
import { StoreOrderModel } from '@model/store-order.model';
@Component({
  selector: 'app-store-order-list',
  templateUrl: './store-order-list.component.html',
  styleUrls: ['./store-order-list.component.scss']
})
export class StoreOrderListComponent {

  public fields = new StoreOrderModel().tableColumns;
  public resource = [
    { name: "teste", document: "123", id: "TS01", createAt: "01-02-2021", edit: "Editar" },
    { name: "Mateo", document: "4312", id: "TS02", createAt: "01-02-2021", edit: "Não Editar" }
  ]
  constructor() { }
}
