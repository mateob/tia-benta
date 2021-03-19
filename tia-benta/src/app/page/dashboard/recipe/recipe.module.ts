import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';

@NgModule({
  declarations: [RecipeFormComponent, RecipeListComponent, RecipeDetailComponent, RecipeViewComponent],
  imports: [
    SharedModule,
    RecipeRoutingModule,
  ],
})
export class RecipeModule { }
