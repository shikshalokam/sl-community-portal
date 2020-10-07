import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from 'shikshalokam';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AssesmentCardComponent } from './assesment-card/assesment-card.component';
import {TranslateModule, TranslateLoader, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OverlayComponent } from './models/overlay/overlay.component';
import { DebounceDirective } from './directives/debounceDirective.directive';
import { ButtonLoadingComponent, CommingSoonComponent, CommunityFooterComponent,
 CommunityHeaderComponent, CardComponent, ConfirmDialogComponent, FiltersComponent, SpinnerComponent, TabsComponent } from './components';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [DebounceDirective, CommunityHeaderComponent, CommunityFooterComponent, CardComponent, FiltersComponent, CommingSoonComponent, SpinnerComponent,
   AssesmentCardComponent,
   TabsComponent,
   ConfirmDialogComponent,
   OverlayComponent,
   ButtonLoadingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    SharedModuleModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    // We ever we use translate  home page not loading
  //   TranslateModule.forChild(),
  //   TranslateModule.forRoot({
  //     loader: {
  //         provide: TranslateLoader,
  //         useFactory: HttpLoaderFactory,
  //         deps: [HttpClient]
  //     }
  // })
  ], exports: [
    CommunityHeaderComponent, DebounceDirective, CommunityFooterComponent, CardComponent, FiltersComponent, SpinnerComponent,
    TranslateModule, TabsComponent,
     ConfirmDialogComponent,ButtonLoadingComponent,
    MatFormFieldModule, SharedModuleModule, AssesmentCardComponent, MatProgressSpinnerModule
  ],
  providers: [TranslateService],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class PortalSharedModule {
  // constructor( public translate: TranslateService){
  //   translate.addLangs(['en', 'od']);
  //   translate.setDefaultLang('en');
  // }
 }
