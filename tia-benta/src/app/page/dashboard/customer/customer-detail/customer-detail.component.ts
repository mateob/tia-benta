import { Component, OnInit } from '@angular/core';

import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  readonly pageActions: Array<PoPageAction> = [];

  constructor() { }

  ngOnInit() { }

}
