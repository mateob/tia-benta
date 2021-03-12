import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './page/public/index/index.component';
import { IndexDashComponent } from './page/dashboard/index-dash/index-dash.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent, loadChildren: () => import('./page/public/public.module').then((m) => m.PublicModule) },
  { path: 'dashboard', component: IndexDashComponent, loadChildren: () => import('./page/dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
