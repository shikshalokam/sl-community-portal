import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/private-modules/auth-gaurd/auth.gaurd';
import { PUBLIC_ROUTES } from './modules/full-layout/layout.routes';
import { DesignComponent } from './modules/full-layout/design/design.component';
import { AppComponent } from './app.component';
import { PrivateGuard } from './modules/community-core';
import { initializer } from 'src/utils/app-init';




const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },

  {
    path: '',
    // canActivate: [PrivateGuard],
    loadChildren: () => import('./modules/full-layout/full-layout.module').then(m => m.FullLayoutModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
