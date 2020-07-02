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



@NgModule({
  declarations: [CommunityHeaderComponent, CommunityFooterComponent, CardComponent, FiltersComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    SharedModuleModule
  ], exports: [
    CommunityHeaderComponent, CommunityFooterComponent, CardComponent, FiltersComponent
  ]
})
export class PortalSharedModule { }
