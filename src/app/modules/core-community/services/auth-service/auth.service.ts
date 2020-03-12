import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';


declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  userName: string;
  constructor(private jwtHelper: JwtHelperService, private router: Router
  ) { }


  private keycloakAuth: any;
  public keycloakInstance;
  keycloak = new KeycloakService();


  initilizeKeycloak(config): Promise<any> {
    return new Promise((resolve, reject) => {
      this.keycloak.init(config).then(success => {
        resolve(config)
      }).catch(error => {
        reject(error)
      })
    })
  }

  isUserLoggedIn() {
    return (this.keycloak && this.keycloak['_instance'].token) ? true : false
  }

  instanceLogin() {
    this.keycloak.login().then(successs => {
      console.log("successs")
    }).catch(error => {
      console.log("errorrrr")
    })
  }

  getToken(): string {
    const accessToken = localStorage.getItem('auth-token');
    console.log(accessToken)
    return accessToken ? accessToken : null;
  }

  getCurrentUserDetails() {
    // console.log(jwt_decode(this.keycloakAuth.token).name)
    // this.userName = jwt_decode(this.keycloakAuth.token).name;
    // return jwt_decode(this.keycloakAuth.token);
    console.log(this.getToken())
    // this.userName = this.getToken() ? this.jwtHelper.decodeToken(this.getToken()).name : '';

    return null
  }

  getLogout() {
    console.log('===== logout==');
    localStorage.clear();
    // this.router.navigate(['public/landing']);
    return this.keycloakAuth.logout();
  }

  getLogin() {
    this.keycloakAuth.login();
  }

}
