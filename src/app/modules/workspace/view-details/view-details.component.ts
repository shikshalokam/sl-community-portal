import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommunityService } from 'shikshalokam';
import { environment } from 'src/environments/environment';
import { apiConfig, CommonService } from '../../portal-core';
import { ConfirmDialogComponent } from '../../portal-shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  criteriaDetails: any;
  criteriaObject: any;
  confirmPopupResult: any;
  constructor(private communityService: CommunityService,
    private dialog: MatDialog,
    private commonService: CommonService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.getCriteriaDetails(this.data.data._id);

  }


  // To get the criteria details
  getCriteriaDetails(criteriaID) {
    this.communityService.get(environment.workspace_url + apiConfig.criteriaDetails + criteriaID)
      .subscribe(data => {
        this.criteriaDetails = data['result'];
      })
  }


  confirmation(data, action) {
    if (action == 'Improvement') {
      this.improvementConfirmDialog(data);
    } else {
      this.resourcesConfirmDialog(data);
    }
  }


  improvementConfirmDialog(data): void {
    this.criteriaObject = data;
    let confirmData = {
      title: "Confirmation",
      message: "Are you sure you want to do this action ?",
      confirmButtonText: "YES",
      cancelButtonText: "NO"
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: confirmData,
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.confirmPopupResult = dialogResult;
      if (this.confirmPopupResult) {
        this.criteriaDetails['improvementProjects'] = this.criteriaDetails['improvementProjects'].filter(({ _id }) => _id !== this.criteriaObject._id);
        this.updateCriteriaDetails();
      } else {
        // this.dialog.closeAll();
      }
    });
  }

  resourcesConfirmDialog(data): void {
    this.criteriaObject = data;
    console.log('this.criteriaObject', this.criteriaObject);
    let confirmData = {
      title: "Confirmation",
      message: "Are you sure you want to do this action ?",
      confirmButtonText: "YES",
      cancelButtonText: "NO"
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: confirmData,
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.confirmPopupResult = dialogResult;
      if (this.confirmPopupResult) {
        this.criteriaDetails['learningResources'] = this.criteriaDetails['learningResources'].filter(({ _id }) => _id !== this.criteriaObject._id);
        this.updateCriteriaDetails();
      } else {
        // this.dialog.closeAll();
      }
    });
  }

  updateCriteriaDetails() {
    delete this.criteriaDetails['createdAt'];
    this.communityService.post(environment.workspace_url + apiConfig.draftCriteriaUpdate
      + this.data.data._id, this.criteriaDetails)
      .subscribe(data => {
        this.commonService.commonSnackBar(data['message'], 'Dismiss', 'top', 10000);
      }, error => {
        this.commonService.commonSnackBar(error['message'], 'Dismiss', 'top', 10000);
      })
  }

}
