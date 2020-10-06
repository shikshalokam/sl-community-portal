import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from '../../constants/apiConstants';
import { CommunityService } from 'shikshalokam';
import { MatDialog } from '@angular/material/dialog';



@Injectable({
  providedIn: 'root'
})

export class CommonService {

  details: any;
  onFormReset = new Subject<void>();
  constructor(private _snackBar: MatSnackBar, private keycloakAuth: KeycloakService,
    private communityService: CommunityService, private dialog: MatDialog,
    private Http: HttpClient) { }

   // To set the data
   setUserDetails(data) {
    this.details = data;
  }


  resetForm(): void {
    this.onFormReset.next();
  }
  getUserDetails() {
    return this.details;
  }

  async getUserRoles() {
    return new Promise((resolve, reject) => {
      this.Http.get(environment.main_url + apiConfig.userManagment.userprofile)
        .toPromise()
        .then(
          res => {
            resolve(res);
          },
          msg => {
            reject(msg);
          }
        );
    });

  }

  // Commonly used in all pages
  commonSnackBar(message, action, position, time) {
    this._snackBar.open(message, action, {
      duration: time,
      verticalPosition: position
    });
  }

  criteriaUpdate(criteriaObj, data){
  this.communityService.post(environment.workspace_url + apiConfig.draftCriteriaUpdate + criteriaObj._id, data)
       .subscribe(data => {
         this.commonSnackBar(data['message'], 'Dismiss', 'top', 10000);
        this.dialog.closeAll();
       }, error =>{
         this.commonSnackBar(error['message'], 'Dismiss', 'top', 10000);
       })
      }

}
