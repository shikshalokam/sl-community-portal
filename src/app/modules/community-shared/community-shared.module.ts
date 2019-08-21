import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityHeaderComponent } from './community-header/community-header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommunityFooterComponent } from './community-footer/community-footer.component';

@NgModule({
  declarations: [CommunityHeaderComponent, CommunityFooterComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ], exports: [
    CommunityHeaderComponent, CommunityFooterComponent
  ]
})
export class CommunitySharedModule { }
