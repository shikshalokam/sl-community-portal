import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';
import {MatChipsModule} from '@angular/material/chips';
import { MatTabsModule, MatTab, MatTabChangeEvent, MatTabGroup, MatTabHeader } from '@angular/material/tabs';
import { ObservationUtilitiesComponent } from './observation-utilities/observation-utilities.component';
import { AddUpdateCriteriaComponent } from './add-update-criteria/add-update-criteria.component';
import  { DynamicFormBuilderModule1,DynamicFormBuilderService } from 'dynamic-form-builder';
import { CreatePageComponent } from './create-page/create-page.component';
import { CreateUtilitiesComponent } from './create-utilities/create-utilities.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { DetailsComponent } from './details/details.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { QuestionsComponent } from './questions/questions.component';
import { PreviewComponent } from './preview/preview.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { DraftsComponent } from './drafts/drafts.component';
import { PublishedComponent } from './published/published.component';
import { SubmittedForReviewComponent } from './submitted-for-review/submitted-for-review.component';


@NgModule({
  declarations: [ObservationUtilitiesComponent, AddUpdateCriteriaComponent, CreatePageComponent, CreateUtilitiesComponent, WorkspaceComponent, DetailsComponent, CriteriaComponent, QuestionsComponent, PreviewComponent, SolutionsComponent, DraftsComponent, PublishedComponent, SubmittedForReviewComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    PortalSharedModule,
    MatChipsModule,
    MatTabsModule,
    DynamicFormBuilderModule1
  ],
  providers: [DynamicFormBuilderService]
})
export class WorkspaceModule { }
