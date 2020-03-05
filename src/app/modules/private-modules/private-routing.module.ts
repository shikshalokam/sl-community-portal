import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateLandingComponent } from './private-landing/private-landing.component';
// import { DashboardComponent } from 'shikshalokam';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'private'
    },
    children: [
      { path: 'landing', component: PrivateLandingComponent, data: { title: 'shikshalokam' } },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class privateRoutingModule { }