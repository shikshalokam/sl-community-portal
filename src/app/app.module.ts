import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER , ApplicationRef, DoBootstrap} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule, TranslateService, SharedModule } from 'shikshalokam';
// import { AuthService } from './core/services/auth/auth.service';
import { MatDividerModule } from '@angular/material/divider';
// import { ApiInterceptor } from 'src/app/core/services/interceptor-service/interceptor.service';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';
// import{ MatCardModule, MatTooltipModule} from '@angular/material'
// import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AuthService } from './modules/private-modules/auth-service/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { MatToolbarModule } from '@angular/material';
import { CommunitySharedModule } from './modules/community-shared/community-shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { SlickModule } from 'ngx-slick';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { keycloakInitializer } from './modules/private-modules/auth/keycloak-initializer';
import { AuthGuard } from './modules/private-modules/auth-gaurd/auth.gaurd';


// const keycloakService = new KeycloakService();

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}
// export function authHttpServiceFactory(http: Http, options: RequestOptions) {
//   return new AuthHttp(new AuthConfig(), http, options);
// }
// export function authFactory(authService: AuthService) {
//    return () => authService.init();
//   return () => {return}  ;
// }
export function tokenGetter() {
  return localStorage.getItem('access_token');
}


// export function authFactory(authService: AuthService) {
//   return () => authService.init();
//   // return;
// }
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    // KeycloakAngularModule,
    // CommonModule,
    AppRoutingModule,
    // SlickCarouselModule,
    SharedModule,
    CoreModule,
    MatDividerModule,
    // ToastrModule.forRoot(),
    CoreModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CommunitySharedModule,
    AngularFontAwesomeModule,
    // SlickModule.forRoot(),
    SlickCarouselModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),
  ],
  providers: [
    TranslateService,
    AuthGuard
    // {
    //   provide: AuthHttp,
    //   useFactory: authHttpServiceFactory,
    //   deps: [Http, RequestOptions]
    // },
    // {
    //   provide: KeycloakService,
    //   useValue: keycloakService
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: keycloakInitializer,
    //   multi: true,
    //   deps: [AuthService]
    // },
    // SlickCarouselModule
  ],
  exports: [
    // SlickCarouselModule
  ],

  bootstrap: [AppComponent]
})


export class AppModule  {
  // ngDoBootstrap(appRef: ApplicationRef) {
  //   keycloakService
  //     .init()
  //     .then(() => {
  //       console.log('[ngDoBootstrap] bootstrap app');
 
  //       appRef.bootstrap(AppComponent);
  //     })
  //     .catch(error => console.error('[ngDoBootstrap] init Keycloak failed', error));
  // }
 }
