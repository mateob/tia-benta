import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionUrl } from '@enums/action-url.enum';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  { path: ActionUrl.LIST, component: UserListComponent },
  { path: `:id/${ActionUrl.EDIT}`, component: UserDetailComponent },
  { path: `:id/${ActionUrl.VIEW}`, component: UserViewComponent },
  { path: ActionUrl.CREATE, component: UserFormComponent },
  { path: '**', redirectTo: ActionUrl.LIST }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
