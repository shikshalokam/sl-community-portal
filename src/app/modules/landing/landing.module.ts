import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTooltipModule, MatIconModule } from '@angular/material';
import { landingRoutingModule } from './landing.routing.module';
import { CoreModule } from 'shikshalokam';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommunitySharedModule } from '../community-shared/community-shared.module';
import { DescriptionCardComponent } from './landing-page/description-card/description-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import { MatToolbarModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    DashboardComponent,
    LandingPageComponent,
    DescriptionCardComponent
  ],
  imports: [
    MatTooltipModule,
    landingRoutingModule,
    CoreModule,
    CommunitySharedModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    SlickCarouselModule
  ]
})
export class LandingModule { }
