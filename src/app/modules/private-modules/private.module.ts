import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { privateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { CommunitySharedModule } from '../community-shared/community-shared.module';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule, TranslateService, SharedModule } from 'shikshalokam';

import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth-service/auth.service';
// import { ConfigurationModule } from 'shikshalokam';

@NgModule({
  declarations: [PrivateComponent, DashboardComponent],
  imports: [
    CommonModule,
    CommunitySharedModule,
    RouterModule,
    CoreModule, SharedModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    // ConfigurationModule,
    privateRoutingModule
  ],
  providers: [TranslateService,
  ]
})
export class PrivateModule {
  constructor(private auth: AuthService) {
    this.auth.init();
  }
}
