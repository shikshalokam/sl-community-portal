import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityHeaderComponent } from './community-header/community-header.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CommunityHeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ], exports: [
    CommunityHeaderComponent
  ]
})
export class CommunitySharedModule { }
