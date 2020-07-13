import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SharedModuleModule } from 'shikshalokam';
import { FiltersComponent } from './filters/filters.component';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CommingSoonComponent } from './comming-soon/comming-soon.component'; 

@NgModule({
  declarations: [CardComponent, FiltersComponent, CommingSoonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    SharedModuleModule
  ], exports: [ CardComponent, FiltersComponent
  ]
})
export class PortalSharedModule { }
