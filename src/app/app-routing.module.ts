import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/private-modules/auth-gaurd/auth.gaurd';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: '' },


    children: [
      {
        path: 'Main',
        loadChildren: './modules/landing/landing.module#LandingModule'
      },
      {
        // canActivate: [AuthGuard],
        path: 'private',
        loadChildren: './modules/private-modules/private.module#PrivateModule'
      },
      {
        path: 'home',
        loadChildren: './modules/public-modules/public.module#PublicModule'
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
     
    ]
  }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
