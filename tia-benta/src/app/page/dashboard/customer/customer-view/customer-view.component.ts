import { Component, OnInit } from '@angular/core';

import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  readonly pageActions: Array<PoPageAction> = [];

  constructor() { }

  ngOnInit() { }

}
