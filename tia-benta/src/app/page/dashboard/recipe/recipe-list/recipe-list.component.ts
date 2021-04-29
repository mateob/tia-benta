import { Component, Injector } from '@angular/core';
import { RecipeModel } from '../../../../shared/model/recipe.model';
import { BaseListComponent } from '../../../../shared/component/base-component/base-list.component';
import { RecipeService } from '../shared/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent extends BaseListComponent<RecipeModel>{
  protected validateBeforeAction(): boolean {
    return true;
  }
  protected onModalSave(): boolean {
    return true;
  }
  protected onModalCancel(): boolean {
    return true;
  }

  constructor(protected injector: Injector, protected recipeService: RecipeService) {
    super(injector, new RecipeModel(), recipeService);
}
}
