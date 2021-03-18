import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule) },
  { path: 'recipe', loadChildren: () => import('./recipe/recipe.module').then((m) => m.RecipeModule) },
  { path: 'item', loadChildren: () => import('./item/item.module').then((m) => m.ItemModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
