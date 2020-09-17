import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateGuard, AuthenticationService, AuthGuard } from './modules/portal-core';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },

  {
    path: '',
    loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule),
    canActivate: [AuthenticationService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

