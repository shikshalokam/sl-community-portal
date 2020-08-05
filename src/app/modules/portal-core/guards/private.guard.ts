import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { KeycloakService, KeycloakAuthGuard } from 'keycloak-angular';


@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate {
  tokendetails: any;

  protected authenticated: boolean;
  constructor(protected router: Router, protected keycloakAngular: KeycloakService) { 
    alert('guard');
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        this.authenticated = await this.keycloakAngular.isLoggedIn();
        // this.roles = await this.keycloakAngular.getUserRoles(true);
        console.log('PrivateGuard', this.authenticated);

        const result = await this.isAccessAllowed(route, state);
        resolve(result);
      } catch (error) {
        reject('An error happened during access validation. Details:' + error);
      }
    });
  }

  // constructor(protected router: Router, protected keycloakAngular: KeycloakService) {
  //   super(router, keycloakAngular);
  // }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   const details = this.keycloakAngular.getdetails();
  //   console.log('canActivate', details);

  //   // this.keycloakAngular.loadUserProfile().then(profile => {
  //   //   console.log(profile.username);
  //   //   console.log(profile['attributes']); //gives you array of all attributes of user, extract what you need
  //   // })
  //   return false;
  // }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log('this.authenticated', this.authenticated);

      if (!this.authenticated) {
        this.keycloakAngular.login()
          .catch(e => console.error(e));
        return reject(false);
      } else {
        return resolve(true);
      }

      // const requiredRoles: string[] = route.data.roles;
      // if (!requiredRoles || requiredRoles.length === 0) {
      //   return resolve(true);
      // } else {
      //   // if (!this.roles || this.roles.length === 0) {
      //   //   resolve(false);
      //   // }
      //   resolve(requiredRoles.every(role => this.roles.indexOf(role) > -1));
      // }
    });
  }






}
