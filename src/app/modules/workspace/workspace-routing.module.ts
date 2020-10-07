import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePageComponent } from './create-page/create-page.component';
import { DetailsComponent } from './details/details.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { QuestionsComponent } from './questions/questions.component';
import { PreviewComponent } from './preview/preview.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { DraftsComponent } from './drafts/drafts.component';
import { PublishedComponent } from './published/published.component';
import { SubmittedForReviewComponent } from './submitted-for-review/submitted-for-review.component';

const routes: Routes = [
  { path: 'create', component: CreatePageComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'drafts', component: DraftsComponent },
  { path: 'pulished', component: PublishedComponent },
  { path: 'submittedforreview', component: SubmittedForReviewComponent },
  { path: '', component: WorkspaceComponent,
  children: [
    { path : 'create/details', component: DetailsComponent},
    { path : 'create/criteria', component: CriteriaComponent},
    { path : 'create/questions', component: QuestionsComponent},
    { path : 'create/preview', component: PreviewComponent}
  ]
 },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
