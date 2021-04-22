import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { IndexDashComponent } from './index-dash/index-dash.component';
import { RoleDetailComponent } from './role/role-detail/role-detail.component';
import { RoleFormComponent } from './role/role-form/role-form.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { RoleViewComponent } from './role/role-view/role-view.component';

@NgModule({
  declarations: [IndexDashComponent, RoleDetailComponent, RoleFormComponent, RoleListComponent, RoleViewComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
