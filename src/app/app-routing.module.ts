import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './modules/landing/dashboard/dashboard.component'
import { LandingModule } from './modules/landing/landing.module';
const routes: Routes = [
  // { path:'', redirectTo:'/dashboard', pathMatch:'full'},
  // { path:'dashboard', component:DashboardComponent},
  {
    path:'landing',
    // redirectTo:'landing/dashboard',
    // pathMatch:'full',
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
