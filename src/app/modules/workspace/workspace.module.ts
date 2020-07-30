import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    PortalSharedModule
  ]
})
export class WorkspaceModule { }
