import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [UserDetailComponent, UserViewComponent, UserFormComponent, UserListComponent],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
