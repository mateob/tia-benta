import { Component, OnInit } from '@angular/core';

import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  readonly pageActions: Array<PoPageAction> = [];

  constructor() { }

  ngOnInit() { }

}
