import { Component, Injector } from '@angular/core';
import { RecipeModel } from '@model/recipe.model';
import { BaseViewComponent } from 'src/app/shared/component/base-component/base-view.component';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent extends BaseViewComponent<RecipeModel> {
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
