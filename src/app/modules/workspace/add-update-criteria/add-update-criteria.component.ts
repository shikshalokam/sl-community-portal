import { Component, OnInit, Optional, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynamicFormComponent, CommunityService, SharedModuleModule } from 'shikshalokam';
import { environment } from 'src/environments/environment';
import { apiConfig, CommonService } from '../../portal-core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-update-criteria',
  templateUrl: './add-update-criteria.component.html',
  styleUrls: ['./add-update-criteria.component.scss']
})
export class AddUpdateCriteriaComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  submitted: boolean = false;
  criteriaDetails: any;
  formdata: any;
  assesmentType: any;
  frameworkId: any;
  criteriaID: any;
  onload = {
    buttonName: 'Add Criteria',
    submitClick: false
  }
  constructor(private formBuilder: FormBuilder,
    private communityService: CommunityService,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<AddUpdateCriteriaComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data) {

    this.formdata = this.data['fieldsForCriteria'];
    this.criteriaID = this.formdata?.criteriaID;
    if(this.formdata.action == 'Add') {
     this.onload = {
        buttonName: 'Add Criteria',
        submitClick: false
      }
    } else {
      this.onload = {
        buttonName: 'Update Criteria',
        submitClick: false
      }
    }

    // this.criteriaDetails = this.data['element'];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.assesmentType = data['assesmentType'];
      this.frameworkId = data['id'];
    });
    
  }


  onSubmit() {
    if (this.form.form.valid) {
      if(this.formdata?.criteriaID) {
          this.criteriaUpdate(this.form.form.value);
      } else {
        this.criteriaCreate(this.form.form.value);
      }
    } else {
      this.form.validateAllFormFields(this.form.form);
    }
  }

  criteriaCreate(data) {
    data.draftFrameworkId = this.frameworkId;
    this.onload.submitClick = true;
    this.communityService.post(environment.workspace_url + apiConfig.draftCriteriaCreate, data)
      .subscribe(data => {
        this.commonService.commonSnackBar(data['message'], 'Dismiss', 'top', 10000);
        this.form.form.reset();
        this.dialogRef.close();
        this.onload.submitClick = false;
      }, error =>{
        this.commonService.commonSnackBar(error['message'], 'Dismiss', 'top', 10000);
      this.onload.submitClick = false;
      })
  }

  criteriaUpdate(data) {
    data.draftFrameworkId = this.frameworkId;
    this.onload.submitClick = true;
    this.communityService.post(environment.workspace_url + apiConfig.draftCriteriaUpdate + this.criteriaID, data)
      .subscribe(data => {
        this.commonService.commonSnackBar(data['message'], 'Dismiss', 'top', 10000);
        this.form.form.reset();
        this.dialogRef.close();
        this.onload.submitClick = false;
      }, error =>{
        this.commonService.commonSnackBar(error['message'], 'Dismiss', 'top', 10000);
      this.onload.submitClick = false;
      })
  }

}
