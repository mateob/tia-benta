import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
