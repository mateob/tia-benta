import { Injectable, Injector } from "@angular/core";
import { RecipeModel } from '@model/recipe.model';
import { BaseResourceService } from '@service/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends BaseResourceService<RecipeModel> {
  constructor(protected injector: Injector) {
    super(injector, RecipeModel);
  }
}
