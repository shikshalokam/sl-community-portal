import { NgModule, DoBootstrap, ApplicationRef} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MatTooltipModule, MatIconModule } from '@angular/material';
import { landingRoutingModule } from './landing.routing.module';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommunitySharedModule } from '../community-shared/community-shared.module';
import { DescriptionCardComponent } from './landing-page/description-card/description-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CoreModuleModule } from 'shikshalokam';
import { environment } from 'src/environments/environment';
import { KeycloakAngularModule } from 'keycloak-angular';
// import { AuthService } from '../private-modules/auth-service/auth.service';
// import { LibraryModule } from '../library/library.module';



@NgModule({
  declarations: [
    DashboardComponent,
    LandingPageComponent,
    DescriptionCardComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    landingRoutingModule,
    CommunitySharedModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    SlickCarouselModule,
    CoreModuleModule,
    KeycloakAngularModule
    // LibraryModule
  ]
})
export class LandingModule {
}
