import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TranslateService } from './core/services/translate-service/translate.service';
import { AuthService } from './core/services/auth/auth.service';
import { MatDividerModule } from '@angular/material/divider';
import { ApiInterceptor } from 'src/app/core/services/interceptor-service/interceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {DashboardComponent} from './modules/landing/dashboard/dashboard.component';
import{ MatCardModule, MatTooltipModule} from '@angular/material'
import {LandingModule} from '../../src/app/modules/landing/landing.module';
export function  setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('od');
}
export function authFactory(authService: AuthService) {
  return () => authService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent 
    // declare it in landing 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    MatDividerModule,
    MatCardModule,
    MatTooltipModule,
    // LandingModule,
    CoreModule.forRoot(),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: authFactory,
      multi: true,
      deps: [AuthService]
    },

  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
