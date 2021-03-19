import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from '@pages/dashboard/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from '@pages/dashboard/recipe-form/recipe-form.component';
import { RecipeListComponent } from '@pages/dashboard/recipe-list/recipe-list.component';
import { RecipeViewComponent } from '@pages/dashboard/recipe-view/recipe-view.component';
import { ActionUrl } from '@enums/action-url.enum';

const routes: Routes = [
  { path: ActionUrl.LIST, component: RecipeListComponent },
  { path: ActionUrl.CREATE, component: RecipeFormComponent },
  { path: `:id/${ActionUrl.EDIT}`, component: RecipeDetailComponent },
  { path: `:id/${ActionUrl.VIEW}`, component: RecipeViewComponent },
  { path: '**', redirectTo: ActionUrl.LIST }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
