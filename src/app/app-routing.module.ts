import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateGuard, PublicGuard } from './modules/core-community/services';

const routes: Routes = [
  { path: '', loadChildren: './modules/public-modules/public.module#PublicModule' , canActivate:[PublicGuard]},
  { path: 'private', loadChildren: './modules/private-modules/private.module#PrivateModule', canActivate: [PrivateGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
