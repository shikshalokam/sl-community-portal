import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateComponent } from './private.component';

// const routes: Routes = [
//   { path: 'dashboard', component: DashboardComponent, data: { title: 'shikshalokam' } },
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
// ];

const routes = [
  {
    path: '',
    component: PrivateComponent,
    data: {},
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: '**',
        redirectTo: '/dashboard'
      }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class privateRoutingModule { }