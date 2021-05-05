import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { RoleRoutingModule } from './role-routing.module';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleViewComponent } from './role-view/role-view.component';


@NgModule({
  declarations: [RoleDetailComponent, RoleFormComponent, RoleListComponent, RoleViewComponent],
  imports: [
    SharedModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
