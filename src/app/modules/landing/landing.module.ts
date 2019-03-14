import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTooltipModule } from '@angular/material';
import { landingRoutingModule } from './landing.routing.module';
import { CoreModule } from 'shikshalokam';

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
