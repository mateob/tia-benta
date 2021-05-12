import { NgModule } from '@angular/core';

import { UserGroupRoutingModule } from './user-group-routing.module';
import { UserGroupListComponent } from './user-group-list/user-group-list.component';
import { UserGroupViewComponent } from './user-group-view/user-group-view.component';
import { UserGroupFormComponent } from './user-group-form/user-group-form.component';
import { UserGroupDetailComponent } from './user-group-detail/user-group-detail.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [UserGroupListComponent, UserGroupViewComponent, UserGroupFormComponent, UserGroupDetailComponent],
  imports: [
    SharedModule,
    UserGroupRoutingModule
  ]
})
export class UserGroupModule { }
