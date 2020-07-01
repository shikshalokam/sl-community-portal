import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
// import { CommonServiceService } from '../common-service.service';


declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})

export class keyCloakService {
  isLoggedIn = false;
  redirectUrl: string;
  userName: string;
  constructor(private jwtHelper: JwtHelperService, private router: Router,
    // private commonServiceService: CommonServiceService
  ) { }


  private keycloakAuth: any;
  public keycloakInstance;
  keycloak = new KeycloakService();


  initilizeKeycloak(config): Promise<any> {
    return new Promise((resolve, reject) => {
      this.keycloak.init(config).then(success => {
        console.log('initilizeKeycloak', success);

        resolve(config)
      }).catch(error => {
        reject(error)
      })
    })
  }


  isUserLoggedIn() {
    return (this.keycloak && this.keycloak['_instance'].token) ? true : false
  }

  getdetails(){
  this.keycloak.loadUserProfile().then(profile => {
    console.log(profile['attributes']); //gives you array of all attributes of user, extract what you need
  })
}


  setToken() {
    const tokendetails = this.keycloak.getKeycloakInstance();
    console.log('tokendetails', tokendetails.profile);

    // this.commonServiceService.setUserDetails(tokendetails.profile);
  }
  // To reurn back the details from keycloak
  sendToken() {
    const tokendetails = this.keycloak.getKeycloakInstance();
    return tokendetails;
  }
  instanceLogin() {
    this.keycloak.login().then(successs => {
      console.log("successs")
    }).catch(error => {
      console.log("errorrrr")
    })
  }

  getToken(): string {
    const accessToken = this.keycloak.getKeycloakInstance().token;
    return accessToken ? accessToken : null;
  }


  getCurrentUserDetails1() {
    this.userName = this.jwtHelper.decodeToken(this.getToken()).name;
    return this.jwtHelper.decodeToken(this.getToken());
  }

  getCurrentUserDetails() {
    this.keycloak.isLoggedIn().then(
      isLogged => {
        if (isLogged) {
          return this.keycloak.getUsername();
        }
      }
    )
    this.userName = this.getToken() ? this.jwtHelper.decodeToken(this.getToken()).name : '';

    return null
  }

  getLogout() {

    localStorage.clear();
    return this.keycloakAuth.logout();
  }
  logout() {
    // environment.base_url + '/home'
    this.keycloak.logout();
    localStorage.clear();
  }

  getLogin() {
    this.keycloakAuth.login();
  }

}
