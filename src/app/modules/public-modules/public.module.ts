import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { publicRoutingModule } from './public.routing.module';
import { LandingPageComponent } from '../landing/landing-page/landing-page.component';
import { CommunitySharedModule } from '../community-shared/community-shared.module';
import { DescriptionCardComponent } from '../landing/landing-page/description-card/description-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import { MatToolbarModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import {AuthService } from '../private-modules/auth-service/auth.service';
import { SharedModule } from 'shikshalokam';
import { MatTooltipModule, MatIconModule } from '@angular/material';
import { CoreModule } from 'shikshalokam';

@NgModule({
    declarations: [LandingPageComponent, DescriptionCardComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatRippleModule,
        MatToolbarModule,
        CommunitySharedModule,
        MatSidenavModule,
        MatListModule,
        SlickCarouselModule,
        SharedModule,
        MatTooltipModule,
        publicRoutingModule, MatIconModule,
        CoreModule,
    ]
})
export class PublicModule { }
