import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewRoutingModule } from './review-routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReviewRoutingModule,
    PortalSharedModule
  ]
})
export class ReviewModule { }
