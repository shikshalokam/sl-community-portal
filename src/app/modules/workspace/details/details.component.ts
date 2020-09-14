import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent, CommunityService } from 'shikshalokam';
import { environment } from 'src/environments/environment';
import { WorkSpaceConfig } from '../workspace.config';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../portal-core';





@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  criteriaForm: any[];
  frameworkId: any;
  assesmentType: any;
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
 

  constructor(private communityService: CommunityService, private route:ActivatedRoute,
    private commonService: CommonService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.assesmentType = data['assesmentType'];
      this.frameworkId = data['id'];
   });
   this.getDetailsForm();
  }


  // validate the form
  validateForm(){
    if(this.form.form.valid) {
      this.updateMetaData(this.form.form.value);
    } else {
      this.form.validateAllFormFields(this.form.form);
    }
  }

  // To update the form
  updateMetaData(data){
    let obj = this.form.fields[4]['options'].find(o => o.value === data.entityType);
    data.entityType = obj;
    this.communityService.post(environment.workspace_url + WorkSpaceConfig.updateMetaData + '/' + this.frameworkId, data)
    .subscribe(data => {
      this.commonService.commonSnackBar(data['message'], 'Dismiss', 'top', 10000);
    })
  }

  // To get the form
  getDetailsForm() {
    this.communityService.get(environment.workspace_url + WorkSpaceConfig.getDetailsForm + '/'+ this.frameworkId)
    .subscribe(data => {
     this.criteriaForm = data['result'];
    })
  }

}
