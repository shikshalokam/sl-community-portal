import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {},
    children: [
      {
        path: 'landing',
        component: LandingPageComponent
      },
      // {
      //   path: '**',
      //   redirectTo: 'landing'
      // }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class publicRoutingModule { }