import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help-routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HelpRoutingModule,
    PortalSharedModule
  ]
})
export class HelpModule { }
