import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseGroupRoutingModule } from './user-group-routing.module';
import { UserGroupDetailComponent } from './user-group-detail/user-group-detail.component';
import { UserGroupFormComponent } from './user-group-form/user-group-form.component';
import { UserGroupListComponent } from './user-group-list/user-group-list.component';
import { UserGroupViewComponent } from './user-group-view/user-group-view.component';


@NgModule({
  declarations: [UserGroupDetailComponent, UserGroupFormComponent, UserGroupListComponent, UserGroupViewComponent],
  imports: [
    CommonModule,
    UseGroupRoutingModule
  ]
})
export class UseGroupModule { }
