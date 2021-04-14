import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { IndexDashComponent } from './index-dash/index-dash.component';
import { UserGroupDetailComponent } from './userGroup/user-group-detail/user-group-detail.component';
import { UserGroupFormComponent } from './userGroup/user-group-form/user-group-form.component';
import { UserGroupListComponent } from './userGroup/user-group-list/user-group-list.component';
import { UserGroupViewComponent } from './userGroup/user-group-view/user-group-view.component';


@NgModule({
  declarations: [IndexDashComponent, UserGroupDetailComponent, UserGroupFormComponent, UserGroupListComponent, UserGroupViewComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
