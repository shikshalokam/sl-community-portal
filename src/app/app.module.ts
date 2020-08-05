import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER , DoBootstrap, ApplicationRef} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
// import { AuthService } from './modules/private-modules/auth-service/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PortalSharedModule } from './modules/portal-shared/portal-shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {  CoreModuleModule } from 'shikshalokam';

import { CommunityCoreModule } from './modules/portal-core/portal-core.module';
import { keyCloakService } from './modules/portal-core/services/keyCloack-service/keycloak.service';

// import { KeycloakAngularModule } from 'keycloak-angular';

// import { PrivateComponent } from './modules/private/private.component';


// export function  setupTranslateFactory(
//   service: TranslateService): Function {
//   return () => service.use('en');
// }

// export function authFactory(authService: AuthService) {
//    return () => authService.init();
//   return () => {return}  ;
// }
export function tokenGetter() {
  return localStorage.getItem('access_token');
}


// export function authFactory(keycloak: keyCloakService) {
//   return () => keycloak.init();
//   // return;
// }
@NgModule({
  declarations: [
    AppComponent,
    // PrivateComponent,

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
    // KeycloakAngularModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),
  ],
  providers: [
    keyCloakService
  ],
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: authFactory,
  //     multi: true,
  //     deps: [keyCloakService]
  //   },
  // ],
  entryComponents: [AppComponent],
  exports: [
  ],
  

  // bootstrap: [AppComponent]
})


export class AppModule implements DoBootstrap {
// implements DoBootstrap {

  constructor(private auth: keyCloakService) { }

  ngDoBootstrap(appRef: ApplicationRef) {
    this.auth.initilizeKeycloak({
      config: {
        'url': environment.keycloak.url,
        'realm': environment.keycloak.realm,
        'clientId': environment.keycloak.clientId,
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
    }).then(success => {

      appRef.bootstrap(AppComponent);
    }).catch(error => {
      appRef.bootstrap(AppComponent);
    })
  }
}

