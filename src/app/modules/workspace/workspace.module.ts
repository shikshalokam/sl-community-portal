import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';
import {MatChipsModule} from '@angular/material/chips';
import { MatTabsModule, MatTab, MatTabChangeEvent, MatTabGroup, MatTabHeader } from '@angular/material/tabs';
import { ObservationUtilitiesComponent } from './observation-utilities/observation-utilities.component';
import { AddUpdateCriteriaComponent } from './add-update-criteria/add-update-criteria.component';


@NgModule({
  declarations: [ObservationUtilitiesComponent, AddUpdateCriteriaComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    PortalSharedModule,
    MatChipsModule,
    MatTabsModule
  ]
})
export class WorkspaceModule { }
