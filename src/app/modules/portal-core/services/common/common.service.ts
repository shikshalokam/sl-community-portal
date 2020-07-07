import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  details: any;
  constructor(private _snackBar: MatSnackBar) { }

   // To set the data
   setUserDetails(data) {
    this.details = data;
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
