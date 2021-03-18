import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';


@NgModule({
  declarations: [IndexComponent, HomeComponent, CarteComponent],
  imports: [
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
