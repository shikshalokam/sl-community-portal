import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { TranslateService, AuthService,ParentService,UtilityService,ApiInterceptor, ReportService } from './services';
import { TranslatePipe } from './pipes';
import { CamelCasePipe } from './pipes'
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ResponsiveNavbarComponent } from './components/responsive-navbar/responsive-navbar.component';
import { AuthGuard } from '../core/auth-gaurd/auth.gaurd'
@NgModule({
  declarations: [
    TranslatePipe,
    CamelCasePipe,
    NavbarComponent,
    ResponsiveNavbarComponent
  ],
  imports: [
    NgxSpinnerModule,
    CommonModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [
  ],
  exports: [
    TranslatePipe,
    NavbarComponent,
    ResponsiveNavbarComponent,
    CamelCasePipe,
    CommonModule,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [TranslateService, AuthService,AuthGuard,UtilityService,ParentService,ApiInterceptor,ReportService]
    };
  }
}
