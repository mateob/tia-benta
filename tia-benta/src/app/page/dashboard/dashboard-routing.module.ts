import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customer', loadChildren: () => import('@pages/dashboard/customer.module').then((m) => m.CustomerModule) },
  { path: 'recipe', loadChildren: () => import('@pages/dashboard/recipe.module').then((m) => m.RecipeModule) },
  { path: 'item', loadChildren: () => import('@pages/dashboard/item.module').then((m) => m.ItemModule) },
  { path: 'user-group', loadChildren: () => import('@pages/dashboard/user-group.module').then((m) => m.UserGroupModule) },
  { path: 'user', loadChildren: () => import('@pages/dashboard/user.module').then((m) => m.UserModule) },
  { path: 'role', loadChildren: () => import('@pages/dashboard/role.module').then((m) => m.RoleModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
