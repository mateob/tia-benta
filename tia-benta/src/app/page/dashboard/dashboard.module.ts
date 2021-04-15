import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { IndexDashComponent } from './index-dash/index-dash.component';
import { UserGroupDetailComponent } from './user-group/user-group-detail/user-group-detail.component';
import { UserGroupFormComponent } from './user-group/user-group-form/user-group-form.component';
import { UserGroupViewComponent } from './user-group/user-group-view/user-group-view.component';
import { UserGroupListComponent } from './user-group/user-group-list/user-group-list.component';


@NgModule({
  declarations: [IndexDashComponent, UserGroupDetailComponent, UserGroupFormComponent, UserGroupViewComponent, UserGroupListComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
