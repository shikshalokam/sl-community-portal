import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTooltipModule } from '@angular/material';
import { landingRoutingModule } from './landing.routing.module';
import { CoreModule } from 'src/app/core';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    MatTooltipModule,
    landingRoutingModule,
    CoreModule,
    
  ]
})
export class LandingModule { }
