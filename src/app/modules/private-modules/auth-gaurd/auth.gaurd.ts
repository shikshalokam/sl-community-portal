import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../auth-service/auth.service';
import { SidenavComponent } from 'shikshalokam';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate ,CanActivateChild {

  constructor(private authService: AuthService, protected keycloakAngular: KeycloakService, 
    private snackBar: MatSnackBar, private router: Router) { 
    }
  url ;
  canAcess ;
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // let url: string = state.url;
    // this.url = state.url;
    // this.canAcess = JSON.parse(localStorage.getItem('canAcess'));
    // console.log(route.data.id + "parent")
    // return ( this.roleAecss(route.data.id ) )
    if (window.localStorage.getItem('auth-token')) {
      return true;
    } else {
      return false;

    }
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    this.url = state.url;
    console.log(route.data.id + "child")

    this.canAcess = JSON.parse(localStorage.getItem('canAcess'));
    return ( this.roleAecss(route.data.id ) )
  }

   isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // if (true) {
        this.keycloakAngular.login()
          .catch(e => console.error(e));
        return reject(false);
      // }
 
      // const requiredRoles: string[] = route.data.roles;
      // if (!requiredRoles || requiredRoles.length === 0) {
      //   return resolve(true);
      // } else {
      //   if (!this.roles || this.roles.length === 0) {
      //     resolve(false);
      //   }
      //   resolve(requiredRoles.every(role => this.roles.indexOf(role) > -1));
      // }
    });
  }

  
  
  roleAecss(url){
    let flag = false ;  
    this.canAcess.forEach(element => {
      if(url.includes(element))  {
        flag =true;
      }
    });
    return flag;
  }

  checkProgarmId(url){
    if(url.includes('/assessments') ){
      if(localStorage.getItem('currentProgram') === null){
        this.router.navigate(['/programs']);
        return false;
      }
      return true;
    }
    return true;
  }

  checkUser(url: string) {
    if (url.includes("parent")) {
      if (this.authService.userName == 'Sandeep') {
        return true;
      }
      this.snackBar.open("Unauthorized Access", "Ok", {duration: 3000});
      return false;
    }
    else {
      if (this.authService.userName == 'Mouneesh') {
        return true;
      }
      this.snackBar.open("Unauthorized Access", "Ok", {duration: 3000});
      return false;

    }

  }
  //
  // canActivateChild(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //   return this.canActivate(route, state);
  // }

  /* . . . */
}