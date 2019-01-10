import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
 
  {
    path:'landing',
    loadChildren: './modules/landing/landing.module#LandingModule'
  },
  {
    path:'',
    redirectTo:'landing',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
