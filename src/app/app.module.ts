import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AuthService } from './modules/private-modules/auth-service/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommunitySharedModule } from './modules/community-shared/community-shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

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
    CommonModule,
    AppRoutingModule,
    MatDividerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CommunitySharedModule,
    SlickCarouselModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: authFactory,
      multi: true,
      deps: [AuthService]
    },
  ],
  exports: [
  ],

  bootstrap: [AppComponent]
})


export class AppModule { }
