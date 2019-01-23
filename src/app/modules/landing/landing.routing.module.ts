import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component'



const routes: Routes = [
   {
       path:'',
       data:{},
       children:[
        {
            path:'',
            component:DashboardComponent
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