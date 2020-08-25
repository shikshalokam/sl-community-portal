import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommunityHeaderComponent } from './community-header/community-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommunityFooterComponent } from './community-footer/community-footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SharedModuleModule } from 'shikshalokam';
import { FiltersComponent } from './filters/filters.component';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { SpinnerComponent } from './spinner/spinner.component'; 
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AssesmentCardComponent } from './assesment-card/assesment-card.component';
import {TranslateModule, TranslateLoader, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [CommunityHeaderComponent, CommunityFooterComponent, CardComponent, FiltersComponent, CommingSoonComponent, SpinnerComponent,
    InputComponent, SelectComponent, RadiobuttonComponent, DynamicFormComponent, 
    CheckboxComponent,MultiSelectComponent, DateComponent,DynamicFieldDirective, AssesmentCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    SharedModuleModule,
    MatFormFieldModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ], exports: [
    CommunityHeaderComponent, CommunityFooterComponent, CardComponent, FiltersComponent, SpinnerComponent,
    InputComponent, SelectComponent, RadiobuttonComponent, DynamicFormComponent, TranslateModule,
    CheckboxComponent,MultiSelectComponent, DateComponent, DynamicFieldDirective,
    MatFormFieldModule, SharedModuleModule, AssesmentCardComponent
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class PortalSharedModule {
  constructor( public translate: TranslateService){
    translate.addLangs(['en', 'od']);
    translate.setDefaultLang('en');
  }
 }
