import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommunityService } from 'shikshalokam';
import { environment } from 'src/environments/environment';
import { CommonService } from '../services/common/common.service';




@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loggedInRoles: any;
  rolesArray: any;
  constructor(private communityService: CommunityService, private commonService: CommonService){

  }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      
      this.loggedInRoles = await this.commonService.getUserRoles();
      if (this.loggedInRoles['result']) {
        this.rolesArray = this.loggedInRoles['result'].roles;
      }
      if (this.rolesArray.includes("DESIGNER")) {
        return true;
      } else {
        const message = `You don't have right to access this page.`;
        this.commonService.commonSnackBar(message, 'Dismiss', 'top', 10000);
        return false;
      }
  }
}
