import { Component } from '@angular/core';
import { CustomerModel } from '@model/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {

  public fields = new CustomerModel().tableColumns;
  public resource = [
    { name: "teste", document: "123", id: "TS01", createAt: "01-02-2021", edit: "Editar" },
    { name: "Mateo", document: "4312", id: "TS02", createAt: "01-02-2021", edit: "Não Editar" }
  ]
  constructor() { }
}
