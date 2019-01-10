import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTooltipModule } from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { landingRoutingModule } from './landing.routing.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    // LandingModule
    landingRoutingModule
    
  ]
})
export class LandingModule { }
