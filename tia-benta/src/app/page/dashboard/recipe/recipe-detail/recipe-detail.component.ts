import { Component, Injector } from '@angular/core';
import { RecipeModel } from '@model/recipe.model';
import { BaseFormComponent } from 'src/app/shared/component/base-component/base-form.component';
import { RecipeService } from '../shared/recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent extends BaseFormComponent<RecipeModel> {
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
