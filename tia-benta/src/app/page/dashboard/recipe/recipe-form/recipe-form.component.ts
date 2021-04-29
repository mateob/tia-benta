import { Component, Injector } from '@angular/core';
import { RecipeModel } from '@model/recipe.model';
import { RecipeService } from '../shared/recipe.service';
import { BaseFormComponent } from '../../../../shared/component/base-component/base-form.component';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent extends BaseFormComponent<RecipeModel> {

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
