import { NgModule, APP_INITIALIZER, DoBootstrap } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { CoreModuleModule } from 'shikshalokam';
import { LibraryModule } from '../library/library.module';
import { MyFolderModule } from '../my-folder/my-folder.module';
import { LandingModule } from '../landing/landing.module';
import { environment } from 'src/environments/environment';
// import { keyCloakService } from '../private-modules/key-cloack/keycloak.service';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from 'src/utils/app-init';
import { PrivateComponent } from './private/private.component';


@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    CoreModuleModule,
    LibraryModule,
    LandingModule,
    MyFolderModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true
    }
  ],
})
export class PrivateModule {
  //  implements DoBootstrap { 

  // constructor(private keycloak: keyCloakService) { }

  // ngDoBootstrap() {
  //   this.keycloak.initilizeKeycloak({
  //     config: {
  //       'url': environment.keycloak.url,
  //       'realm': environment.keycloak.realm,
  //       'clientId': environment.keycloak.clientId,
  //     },
  //     initOptions: {
  //       onLoad: 'login-required',
  //       checkLoginIframe: false,
  //     },
  //   }).then(success => {
  //   }).catch(error => {
  //   })
  // }

}
