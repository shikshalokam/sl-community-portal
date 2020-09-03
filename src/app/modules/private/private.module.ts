import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { CoreModuleModule } from 'shikshalokam';
import { LibraryModule } from '../library/library.module';
import { MyFolderModule } from '../my-folder/my-folder.module';
import { LandingModule } from '../landing/landing.module';
import { PrivateComponent } from './private/private.component';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';


@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    CoreModuleModule,
    LibraryModule,
    LandingModule,
    MyFolderModule,
    PortalSharedModule,
  ],
})
export class PrivateModule {
  
}
