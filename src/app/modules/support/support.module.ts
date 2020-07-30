import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportRoutingModule } from './support-routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SupportRoutingModule,
    PortalSharedModule
  ]
})
export class SupportModule { }
