import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFolderRoutingModule } from './my-folder-routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyFolderRoutingModule,
    PortalSharedModule
  ]
})
export class MyFolderModule { }
