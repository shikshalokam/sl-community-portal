import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
    console.log("inside confff")
    return new Promise((resolve, reject) => {
      const config = {
        'url': environment.keycloak.url,
        'realm': environment.keycloak.realm,
        'clientId': environment.keycloak.clientId,
      };
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({ onLoad: 'check-sso' })
        .success((data) => {
          console.log(data)
          console.log(this.keycloakAuth);
          debugger
          if(!data){
            // console.log(data.isTokenExpired())
            this.keycloakAuth.login();
          }
          // this.toastr.success('Hello world!', 'Toastr fun!');
          // localStorage.setItem('auth-token', this.keycloakAuth.token)
          // localStorage.setItem('downloadReport-token', environment.downloadReportHeaderValue);
          // this.router.navigateByUrl('/private/dashboard');
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
    console.log(this.getToken())
    // this.userName = this.getToken() ? this.jwtHelper.decodeToken(this.getToken()).name : '';

    return  null
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
