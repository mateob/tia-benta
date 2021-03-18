import { Component, OnInit } from '@angular/core';

import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  readonly pageActions: Array<PoPageAction> = [];

  constructor() { }

  ngOnInit() { }

}
