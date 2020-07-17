import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { ObservationsComponent } from './observations/observations.component';
import { AssesmentsComponent } from './assesments/assesments.component';
import { LibraryComponent } from './library/library.component';
import { CommingSoonComponent } from '../portal-shared/comming-soon/comming-soon.component';


const routes: Routes = [{

  path: '',
  component: LibraryComponent,
  children: [
    { path: 'learning', component: LearningResourcesComponent },
    { path: 'observation', component: ObservationsComponent },
    { path: 'assesment', component: AssesmentsComponent },
    { path: 'comming-soon', component: CommingSoonComponent},
    {
      path: '', redirectTo: '/library/learning', pathMatch: 'full'
    },
    { path: '**', redirectTo: '/library/learning', pathMatch: 'full' }
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }


