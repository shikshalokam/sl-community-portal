import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as jwt_decode from "jwt-decode";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  userName: string;
  constructor(private jwtHelper: JwtHelperService, private router: Router,
  ) { }


  private keycloakAuth: any;

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        'url': environment.keycloak.url,
        'realm': environment.keycloak.realm,
        'clientId': environment.keycloak.clientId,
        'redirect_uri':'http://localhost:4200/private/landing'
      };
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({ onLoad: 'login-required' })
        .success((data) => {
          console.log(data)
          console.log('sucess', this.keycloakAuth);
          // this.toastr.success('Hello world!', 'Toastr fun!');
          localStorage.setItem('auth-token', this.keycloakAuth.token)
          localStorage.setItem('downloadReport-token', environment.downloadReportHeaderValue);
          this.router.navigateByUrl('/private/landing');
          resolve();
        }, error => {
          console.log('===========', error);
        })
        .error(() => {
          console.log('=========== reject');
          reject();
        });
    });
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

    this.userName = this.getToken() ? this.jwtHelper.decodeToken(this.getToken()).name : '';

    return this.jwtHelper.decodeToken(this.getToken());
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
