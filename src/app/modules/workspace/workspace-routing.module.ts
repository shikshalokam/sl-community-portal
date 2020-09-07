import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommingSoonComponent } from '../portal-shared/comming-soon/comming-soon.component';
import { ObservationUtilitiesComponent } from './observation-utilities/observation-utilities.component';

const routes: Routes = [
  { path: '', component: ObservationUtilitiesComponent},
  { path: 'edit/:id', component: ObservationUtilitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
