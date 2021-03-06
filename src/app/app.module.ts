import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule,TranslateService,SharedModule } from 'shikshalokam';
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

export function  setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

// export function authFactory(authService: AuthService) {
//    return () => authService.init();
//   return () => {return}  ;
// }
export function tokenGetter() {
  return localStorage.getItem('access_token');
}


export function authFactory(authService: AuthService) {
  return () => authService.init();
  // return;
}
@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    AppRoutingModule,
    // SlickCarouselModule,
    SharedModule,
    CoreModule,
    MatDividerModule,
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
    {
      provide: APP_INITIALIZER,
      useFactory: authFactory,
      multi: true,
      deps: [AuthService]
    },
    // SlickCarouselModule
  ],
  exports:[
    // SlickCarouselModule
  ],

  bootstrap: [AppComponent]
})


export class AppModule { }
