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
      "title": "create learning resources",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat auctor nibh. Curabitur malesuada dui uttellus tempus, vitae tristique erat ultrices. Suspendisse pulvinar nec nisi quis maximus.",
      "buttonText": 'create',
      "type": 'resources',
      "tooltip": "create resources"
    },
    {
      "title": "create observations",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat auctor nibh. Curabitur malesuada dui uttellus tempus, vitae tristique erat ultrices. Suspendisse pulvinar nec nisi quis maximus.",
      "buttonText": 'create',
      "type": "observations",
      "tooltip": "create observations"
    },
    {
      "title": "create assesment",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat auctor nibh. Curabitur malesuada dui uttellus tempus, vitae tristique erat ultrices. Suspendisse pulvinar nec nisi quis maximus.",
      "buttonText": 'create',
      "type": "assesment",
      "tooltip": "create assesment"
    },
    {
      "title": "Create Improvements",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat auctor nibh. Curabitur malesuada dui uttellus tempus, vitae tristique erat ultrices. Suspendisse pulvinar nec nisi quis maximus.",
      "buttonText": 'create',
      "type": "improvements",
      "tooltip": "create improvements"
    }
  ]
  constructor(private router: Router, private communityService: CommunityService,
    private commonService: CommonService) { }

  ngOnInit() {
  }

 // To get the id to create the form 
  create(assesmentType) {
    this.communityService.post(environment.workspace_url + apiConfig.detailsCreate, '')
    .subscribe(data => {
      this.frameworkId = data['result']['_id'];
      this.router.navigate(['/workspace/create/details'], { queryParams: { assesmentType: assesmentType, id: this.frameworkId } });
    }, error => {
      this.commonService.commonSnackBar(error['message'], 'Dismiss', 'top', 10000);
    })

   

  }



}
