import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionUrl } from '@enums/action-url.enum';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleViewComponent } from './role-view/role-view.component';

const routes: Routes = [
  { path: ActionUrl.LIST, component: RoleListComponent },
  { path: `:id/${ActionUrl.EDIT}`, component: RoleDetailComponent },
  { path: `:id/${ActionUrl.VIEW}`, component: RoleViewComponent },
  { path: ActionUrl.CREATE, component: RoleFormComponent },
  { path: '**', redirectTo: ActionUrl.LIST }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
