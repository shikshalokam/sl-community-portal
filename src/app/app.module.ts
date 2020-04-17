import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ApplicationRef, DoBootstrap } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule, TranslateService, SharedModule } from 'shikshalokam';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AuthService } from './modules/core-community/services/auth-service/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { MatToolbarModule } from '@angular/material';
import { CommunitySharedModule } from './modules/community-shared/community-shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { KeycloakAngularModule } from 'keycloak-angular';



export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}
export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    MatDividerModule,
    CoreModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CommunitySharedModule,
    AngularFontAwesomeModule,
    SlickCarouselModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),
    KeycloakAngularModule
  ],
  providers: [
    TranslateService,
    AuthService,
  ],
  exports: [
  ],
  entryComponents: [
    AppComponent
  ]
})


export class AppModule implements DoBootstrap {

  constructor(private auth: AuthService) { }

  ngDoBootstrap(appRef: ApplicationRef) {
    this.auth.initilizeKeycloak({
      config: {
        'url': environment.keycloak.url,
        'realm': environment.keycloak.realm,
        'clientId': environment.keycloak.clientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false
      },
    }).then(success => {
      appRef.bootstrap(AppComponent);
    }).catch(error => {

    })




  }
}
