import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component'
import { LandingPageComponent } from './landing-page/landing-page.component';



const routes: Routes = [
   {
       path:'',
       data:{},
       children:[
        {
            path:'',
            component:LandingPageComponent
        },
        {
            path : '**',
            redirectTo:''
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
export class landingRoutingModule{}