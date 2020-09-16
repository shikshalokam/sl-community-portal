import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from 'shikshalokam';
import { environment } from 'src/environments/environment';
import { CommonService, apiConfig } from '../../portal-core';




@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  frameworkId: any;
  cardDetails = [
    {
      "title": "Create Learning Resources",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat auctor nibh. Curabitur malesuada dui uttellus tempus, vitae tristique erat ultrices. Suspendisse pulvinar nec nisi quis maximus.",
      "action": "Create",
      "redirect_url": "",
      "endpoint": "",
      "name": "Resources",
      "tooltip": "create Resources"
    },
    {
      "title": "Create Observations",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat auctor nibh. Curabitur malesuada dui uttellus tempus, vitae tristique erat ultrices. Suspendisse pulvinar nec nisi quis maximus.",
      "action": "Create",
      "redirect_url": "",
      "endpoint": "",
      "name": "Observations",
      "tooltip": "Create Observations"
    },
    {
      "title": "Create Assesment",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat auctor nibh. Curabitur malesuada dui uttellus tempus, vitae tristique erat ultrices. Suspendisse pulvinar nec nisi quis maximus.",
      "action": "Create",
      "redirect_url": "",
      "endpoint": "",
      "name": "Assesment",
      "tooltip": "Create Assesment"
    },
    {
      "title": "Create Improvements",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat auctor nibh. Curabitur malesuada dui uttellus tempus, vitae tristique erat ultrices. Suspendisse pulvinar nec nisi quis maximus.",
      "action": "Create",
      "redirect_url": "",
      "endpoint": "",
      "name": "Improvements",
      "tooltip": "Create Improvements"
    }
  ]
  constructor(private router: Router, private communityService: CommunityService,
    private commonService: CommonService) { }

  ngOnInit() {
  }

 
  create(assesmenttype) {
    this.communityService.post(environment.workspace_url + apiConfig.detailsCreate, '')
    .subscribe(data => {
      this.frameworkId = data['result']['_id'];
      this.router.navigate(['/workspace/create/Details'], { queryParams: { assesmentType: assesmenttype, id: this.frameworkId } });
    }, error => {
      this.commonService.commonSnackBar(error['message'], 'Dismiss', 'top', 10000);
    })

   

  }



}
