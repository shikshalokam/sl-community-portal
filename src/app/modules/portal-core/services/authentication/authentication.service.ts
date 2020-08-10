import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthenticationService extends KeycloakAuthGuard {

    constructor(private http: HttpClient,
        protected router: Router,
        protected keycloakService: KeycloakService) {
        super(router, keycloakService);
    }
    public doLogout(): void {
        this.keycloakService.logout(environment.portal_name).then();
    }

    public isStillLoggedIn(): boolean {
        if (this.authenticated === undefined) {
            return false;
        }
        return this.authenticated;
    }
    isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!this.authenticated) {
                this.keycloakAngular.login()
                    .catch(e => console.error(e));
                return reject(false);
            }

            const requiredRoles: string[] = route.data.roles;
            if (!requiredRoles || requiredRoles.length === 0) {
                return resolve(true);
            } else {
                if (!this.roles || this.roles.length === 0) {
                    resolve(false);
                }
                resolve(requiredRoles.every(role => this.roles.indexOf(role) > -1));
            }
        });
    }

}