import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER , DoBootstrap, ApplicationRef} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PortalSharedModule } from './modules/portal-shared/portal-shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {  CoreModuleModule, SharedModuleModule } from 'shikshalokam';
import { CommunityCoreModule } from './modules/portal-core/portal-core.module';
import { KeycloakAngularModule } from 'keycloak-angular';
import { AuthenticationService } from './modules/portal-core';
import { initializer } from './keycloak-init';
import { KeycloakService } from 'keycloak-angular';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModuleModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatDividerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    PortalSharedModule,
    SlickCarouselModule,
    CommunityCoreModule,
    KeycloakAngularModule,
    SharedModuleModule,
  ],
  providers: [
    AuthenticationService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
  ],
  entryComponents: [AppComponent],
  exports: [
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }


