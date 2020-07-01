import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { CoreModuleModule, SharedModuleModule } from 'shikshalokam';
import { ObservationsComponent } from './observations/observations.component';
import { AssesmentsComponent } from './assesments/assesments.component';
import { CommunitySharedModule } from '../community-shared/community-shared.module';
import { FiltersComponent } from './filters/filters.component';
import { LibraryTabComponent } from './library-tab/library-tab.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [LearningResourcesComponent, ObservationsComponent, AssesmentsComponent, FiltersComponent, LibraryTabComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    CoreModuleModule,
    CommunitySharedModule,
    SharedModuleModule,
    MatIconModule
  ]
})
export class LibraryModule { }
