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
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        this.authenticated = await this.keycloakAngular.isLoggedIn();
        // this.roles = await this.keycloakAngular.getUserRoles(true);
        if (!this.authenticated) {
          this.keycloakAngular.login()
            .catch(e => console.error(e));
          return reject(false);
        } else {
          return resolve(true);
        }
        const result = await this.isAccessAllowed(route, state);
        resolve(result);
      } catch (error) {
        reject('An error happened during access validation. Details:' + error);
      }
    });
  }

 

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
