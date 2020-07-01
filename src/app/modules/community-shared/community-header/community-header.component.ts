import { Component, OnInit, Output, EventEmitter, ApplicationRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
// import { AuthService } from '../../private-modules/auth-service/auth.service';
// import { KeycloakService } from '../../private-modules/key-cloack/keycloak.service';
import { KeycloakService, } from 'keycloak-angular';
// import { keyCloakService } from '../../private-modules/key-cloack/keycloak.service';
// declare let Keycloak: any;


@Component({
  selector: 'app-community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.scss']
})
export class CommunityHeaderComponent implements OnInit {

  @Output() linkClick = new EventEmitter();
  @Output() toggle = new EventEmitter()
  baseUrl = environment.keycloakBaseUrl + '/home';

  constructor(private router: Router,
    // private Keycloak: keyCloakService,
    private Keycloakservice: KeycloakService
    //  private auth: AuthService,
  ) { }
  // keycloak = new KeycloakService();

  ngOnInit() {
  }

  goTo(id) {
    this.linkClick.emit(id)
  }

  toggleNav() {
    this.toggle.emit();
  }

    login() {
    // this.keycloaklogin();
    //  const response  =  this.Keycloakservice.init();
    //  console.log('response', response);
    // const response =  this.init();
    // console.log('login', response);
    // this.keycloak.init();
    this.router.navigateByUrl('library/learning');
    //  this.keycloaklogin();
    //  KeycloakService.auth.authz.loadUserProfile()
    // alert(this.Keycloak.isUserLoggedIn())

    // this.Keycloakservice.login();
  }




  // keycloaklogin() {
  //   this.Keycloak.initilizeKeycloak({
  //     config: {
  //       'url': environment.keycloak.url,
  //       'realm': environment.keycloak.realm,
  //       'clientId': environment.keycloak.clientId,
  //     },
  //     initOptions: {
  //       onLoad: 'login-required',
  //       checkLoginIframe: true,
  //     },
  //   }).then(data => {
  //     console.log('llllllllllll', data);
  //     this.router.navigate(['/private/learning']);
  //   }).catch(error => {

  //   })
  // }


  //   init() {
  //     const keycloakAuth: any = Keycloak({
  //        url: environment.keycloak.url,
  //        realm: environment.keycloak.realm,
  //        clientId: environment.keycloak.clientId,
  //        onLoad: 'login-required',
  //        checkLoginIframe: false,
  //     });
  //     return new Promise((resolve, reject) => {
  //        keycloakAuth.init({onLoad: 'login-required'})
  //           .success(() => {
  //              console.log('CommunityHeaderComponent', keycloakAuth);
  //              KeycloakService.auth.loggedIn = true;
  //              KeycloakService.auth.authz = keycloakAuth;
  //              KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl
  //                 + '/realms/angular_keycloak/protocol/openid-connect/logout?redirect_uri='
  //                 + document.baseURI;
  //              resolve();
  //           })
  //           .error(() => {
  //              reject();
  //           });
  //     });
  //  }



}
