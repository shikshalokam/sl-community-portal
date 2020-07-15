import { NgModule } from '@angular/core';
import { CommunityHeaderComponent } from './community-header/community-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommunityFooterComponent } from './community-footer/community-footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SharedModuleModule } from 'shikshalokam';
import { FiltersComponent } from './filters/filters.component';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { SpinnerComponent } from './spinner/spinner.component'; 

@NgModule({
  declarations: [CommunityHeaderComponent, CommunityFooterComponent, CardComponent, FiltersComponent, CommingSoonComponent, SpinnerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    SharedModuleModule
  ], exports: [
    CommunityHeaderComponent, CommunityFooterComponent, CardComponent, FiltersComponent, SpinnerComponent
  ]
})
export class PortalSharedModule { }
