import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { ObservationsComponent } from './observations/observations.component';
import { AssesmentsComponent } from './assesments/assesments.component';
import { LibraryTabComponent } from './library-tab/library-tab.component';


const routes: Routes = [{

  path: '',
  component: LibraryTabComponent,
  children: [
    { path: 'learning', component: LearningResourcesComponent },
    { path: 'observation', component: ObservationsComponent },
    { path: 'assesment', component: AssesmentsComponent },
    // {
    //   path: '', redirectTo: '/learning', pathMatch: 'full'
    // },
    // { path: '**', redirectTo: '/learning', pathMatch: 'full' }
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
