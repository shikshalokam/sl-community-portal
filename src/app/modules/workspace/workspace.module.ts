import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import {MatChipsModule} from '@angular/material/chips';
import { MatTabsModule, MatTab, MatTabChangeEvent, MatTabGroup, MatTabHeader } from '@angular/material/tabs';
import { AddUpdateCriteriaComponent } from './add-update-criteria/add-update-criteria.component';
import  { DynamicFormBuilderModule1,DynamicFormBuilderService } from 'dynamic-form-builder';
import { CreatePageComponent } from './create-page/create-page.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { DetailsComponent } from './details/details.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { QuestionsComponent } from './questions/questions.component';
import { PreviewComponent } from './preview/preview.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { DraftsComponent } from './drafts/drafts.component';
import { PublishedComponent } from './published/published.component';
import { SubmittedForReviewComponent } from './submitted-for-review/submitted-for-review.component';
import { AddImprovementsComponent } from './add-improvements/add-improvements.component';
import { AddResourcesComponent } from './add-resources/add-resources.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';


@NgModule({
  declarations: [AddUpdateCriteriaComponent,
     CreatePageComponent, WorkspaceComponent, DetailsComponent,
      CriteriaComponent, QuestionsComponent, PreviewComponent, SolutionsComponent, DraftsComponent,
       PublishedComponent, SubmittedForReviewComponent, AddImprovementsComponent, AddResourcesComponent, ViewDetailsComponent],
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
