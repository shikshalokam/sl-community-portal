import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFolderRoutingModule } from './my-folder-routing.module';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    MyFolderRoutingModule
  ]
})
export class MyFolderModule { }
