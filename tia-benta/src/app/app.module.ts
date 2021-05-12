import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DBTiaBenta } from './shared/db-tia-benta';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { environment } from '../environments/environment';

registerLocaleData(localePt);

const devLocalDB = environment.URL_API === 'api' ? [
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(DBTiaBenta, { delay: 500 }),
] : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PoModule,
    RouterModule.forRoot([]),
    devLocalDB
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
