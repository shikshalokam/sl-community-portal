import { Component, OnInit } from '@angular/core';
import { CommonService, apiConfig } from '../../portal-core';
import { AddUpdateCriteriaComponent } from '../add-update-criteria/add-update-criteria.component';
import { MatDialog } from '@angular/material/dialog';
import { CommunityService } from 'shikshalokam';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AddImprovementsComponent } from '../add-improvements/add-improvements.component';
import { AddResourcesComponent } from '../add-resources/add-resources.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { ConfirmDialogComponent } from '../../portal-shared/components';




@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  assesmentType: any;
  frameworkId: any;
  criteriaList: any;
  criteriaListCount: any;
  criteriaListPageSize = 5;
  nextCriteriaPage = 1;
  displayedColumns: string[] = ['name', 'description', 'actions'];
  confirmPopupResult: any;
  criteriaObject: any;
  criteriaForm: any;
  impCategories: any;

  constructor(private commonService: CommonService, private dialog: MatDialog,
    private communityService: CommunityService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.assesmentType = data['assesmentType'];
      this.frameworkId = data['id'];
    });
    this.draftCriteriaList(this.frameworkId, '');
    this.getAddCriteriaForm();
  }

  getAddCriteriaForm() {
    this.communityService.post(environment.workspace_url + apiConfig.getCriteriaForm, '')
      .subscribe(data => {
        this.criteriaForm = data['result'];
      })
  }

  autoAddCriteria() {
    this.communityService.post(environment.workspace_url + apiConfig.getCriteriaForm, '')
    .subscribe(data => {
      this.criteriaForm = data['result'];
      this.openDialog(this.criteriaForm);
    })
   
  }

  onPaginateChange(event) {
    this.nextCriteriaPage = event.pageIndex + 1;
    this.criteriaListPageSize = event.pageSize;
    this.draftCriteriaList(this.frameworkId, '');
  }

  // Adding Criteria popup
  openDialog(fieldsForCriteria): void {
    fieldsForCriteria.action = 'Add'
    fieldsForCriteria.title = 'Add'
    const dialogRef = this.dialog.open(AddUpdateCriteriaComponent
      , {
        disableClose: true,
        width: '40vw',
        data: { fieldsForCriteria }
      });
    dialogRef.afterClosed().subscribe(result => {
        this.draftCriteriaList(this.frameworkId, '');
    });
  }

  getImprovementsCategories(criteria){
    this.communityService.post(environment.workspace_url + apiConfig.getImprovementCategories, '')
    .subscribe(data => {
      this.impCategories = data['result'];
      this.impCategories.criteria = criteria;
      this.addImprovements(this.impCategories);
    })
  }


  addImprovements(data) {
    const dialogRef = this.dialog.open(AddImprovementsComponent
      , {
        disableClose: true,
        data: { data }
      });
  }

  getResources(data){
    this.addResources(data);
  }


  viewCriteriaDetails(data){
    const dialogRef = this.dialog.open(ViewDetailsComponent
      , {
        disableClose: true,
        width: '60%',
        height: '75%',
        data: { data }
      });
  }


  addResources(data) {
    const dialogRef = this.dialog.open(AddResourcesComponent
      , {
        disableClose: true,
        width: '50%',
        height: '85%',
        data: { data }
      });
  }

  editCriteria(data) {
    this.criteriaForm.forEach(element => {
      Object.keys(data).forEach(key => {
        if (element.field == key)
          element.value = data[key]
      });
      this.criteriaForm.criteriaID = data['_id'];
    });
    this.editPopup(this.criteriaForm)
  }


  editPopup(fieldsForCriteria) {
    fieldsForCriteria.action = 'Edit'
    fieldsForCriteria.title = 'Edit'
    const dialogRef = this.dialog.open(AddUpdateCriteriaComponent
      , {
        disableClose: true,
        width: '40%',
        data: { fieldsForCriteria }
      });
    dialogRef.afterClosed().subscribe(result => {
        this.draftCriteriaList(this.frameworkId, '');
    });
  }

  draftCriteriaList(frameWorkId, searchString) {
    this.communityService.get(environment.workspace_url +
      apiConfig.listDraftCriteria + frameWorkId + '?search=' + searchString + '&page=' +
      this.nextCriteriaPage + '&limit=' + this.criteriaListPageSize).subscribe(data => {
        if (data && data['status'] == 200) {
          this.criteriaList = data['result']['data'];
          this.criteriaListCount = data['result'].count;
        }
      },
        error => {
          this.commonService.commonSnackBar(error['message'], 'Dismiss', 'top', 10000);
        });
  }

  // confirmDialog
  confirmDialog(data): void {
    this.criteriaObject = data;
    let confirmData = {
      title: "TITLE.CONFIRMATION_TITLE",
      message: "MESSAGES.CONFIRMATION_MSG",
      confirmButtonText: "YES",
      cancelButtonText: "NO"
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: confirmData,
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.confirmPopupResult = dialogResult;
      if (this.confirmPopupResult) {
        this.communityService.post(environment.workspace_url + apiConfig.deleteCriteria + this.criteriaObject._id, '').subscribe(data => {
          this.commonService.commonSnackBar(data['message'], 'Dismiss', 'top', 10000);
          this.draftCriteriaList(this.frameworkId, '');
        }, error => {
          console.log("error while callng api", error);
        })
      } else {
        this.dialog.closeAll();
      }
    });
  }

}
