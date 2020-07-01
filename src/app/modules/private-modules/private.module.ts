import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LibraryModule } from '../library/library.module';
import { environment } from 'src/environments/environment';
import { LearningResourcesComponent } from '../library/learning-resources/learning-resources.component';
// import { AuthService } from './auth-service/auth.service';
import { CommunitySharedModule } from '../community-shared/community-shared.module';
import { PrivateRoutingModule } from './private.routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // LibraryModule,
    CommunitySharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule{
//  implements DoBootstrap {
//   constructor(private auth: AuthService) { }
//   ngDoBootstrap(appRef: ApplicationRef) {
//     this.auth.initilizeKeycloak({
//       config: {
//         'url': environment.keycloak.url,
//         'realm': environment.keycloak.realm,
//         'clientId': environment.keycloak.clientId,
//       },
//       initOptions: {
//         onLoad: 'login-required',
//         checkLoginIframe: false,
//       },
//     }).then(success => {
//       appRef.bootstrap(LearningResourcesComponent);
//     }).catch(error => {
//     })
//   }
}
