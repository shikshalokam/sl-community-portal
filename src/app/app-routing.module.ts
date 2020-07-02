import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateGuard } from './modules/portal-core';
import { initializer } from 'src/utils/app-init';




const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },

  {
    path: '',
    // canActivate: [PrivateGuard],
    loadChildren: () => import('./modules/private/private.module').then(m => m.FullLayoutModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
