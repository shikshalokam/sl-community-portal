import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  details: any;
  onFormReset = new Subject<void>();
  constructor(private _snackBar: MatSnackBar, private keycloakAuth: KeycloakService) { }

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

  // Commonly used in all pages
  commonSnackBar(message, action, position, time) {
    this._snackBar.open(message, action, {
      duration: time,
      verticalPosition: position
    });
  }
}
