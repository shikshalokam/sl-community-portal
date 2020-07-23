import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { CoreModuleModule, SharedModuleModule } from 'shikshalokam';
import { ObservationsComponent } from './observations/observations.component';
import { AssesmentsComponent } from './assesments/assesments.component';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';
import { MatIconModule } from '@angular/material/icon';
import { LibraryComponent } from './library/library.component';
import { ImprovementProjectsComponent } from './improvement-projects/improvement-projects.component';


@NgModule({
  declarations: [LearningResourcesComponent, ObservationsComponent, AssesmentsComponent, LibraryComponent, ImprovementProjectsComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    CoreModuleModule,
    PortalSharedModule,
    SharedModuleModule,
    MatIconModule
  ]
})
export class LibraryModule { }
