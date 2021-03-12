import { Component, OnInit } from '@angular/core';

import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  readonly pageActions: Array<PoPageAction> = [];

  constructor() { }

  ngOnInit() { }

}