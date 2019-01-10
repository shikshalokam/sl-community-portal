import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTooltipModule } from '@angular/material';
import { landingRoutingModule } from './landing.routing.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    landingRoutingModule
  ]
})
export class LandingModule { }
