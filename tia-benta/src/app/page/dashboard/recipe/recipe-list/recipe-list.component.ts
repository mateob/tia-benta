import { Component } from '@angular/core';

import { PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { RecipeModel } from '../../../../shared/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  public fields: PoTableColumn[] = new RecipeModel().tableColumns;
  public resource = [{
    name: "Pastel de Strogonoff",
    price: 12.50,
    items: [
      { name: "Carne", detail: "Bife de coxão mole cortado em cubos", quantity: 500, unit: "g" },
      { name: "Champingnon", detail: "Champingnon cortados em rodelas", quantity: 1, unit: "pak" },
    ]
  }];

  readonly pageActions: Array<PoPageAction> = [];

  constructor() { }

}
