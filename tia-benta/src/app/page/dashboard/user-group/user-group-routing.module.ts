import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionUrl } from '@enums/action-url.enum';
import { UserGroupDetailComponent } from './user-group-detail/user-group-detail.component';
import { UserGroupFormComponent } from './user-group-form/user-group-form.component';
import { UserGroupListComponent } from './user-group-list/user-group-list.component';
import { UserGroupViewComponent } from './user-group-view/user-group-view.component';

const routes: Routes = [
  { path: ActionUrl.LIST, component: UserGroupListComponent },
  { path: `:id/${ActionUrl.EDIT}`, component: UserGroupDetailComponent },
  { path: `:id/${ActionUrl.VIEW}`, component: UserGroupViewComponent },
  { path: ActionUrl.CREATE, component: UserGroupFormComponent },
  { path: '**', redirectTo: ActionUrl.LIST }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserGroupRoutingModule { }
