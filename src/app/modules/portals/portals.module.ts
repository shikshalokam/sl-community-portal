import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalsRoutingModule } from './portals-routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PortalsRoutingModule,
    PortalSharedModule
  ]
})
export class PortalsModule { }
