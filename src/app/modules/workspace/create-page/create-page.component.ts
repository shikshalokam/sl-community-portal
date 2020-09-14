import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from 'shikshalokam';
import { environment } from 'src/environments/environment';
import { WorkSpaceConfig } from '../workspace.config';



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
      "description": "",
      "action": "Create",
      "redirect_url": "",
      "endpoint": ""
    },
    {
      "title": "Create Learning Resources",
      "description": "",
      "action": "Create",
      "redirect_url": "",
      "endpoint": ""
    },
    {
      "title": "Create Learning Resources",
      "description": "",
      "action": "Create",
      "redirect_url": "",
      "endpoint": ""
    },
    {
      "title": "Create Learning Resources",
      "description": "",
      "action": "Create",
      "redirect_url": "",
      "endpoint": ""
    }
  ]
  constructor(private router: Router, private communityService: CommunityService) { }

  ngOnInit() {
  }

 
  create(assesmenttype) {
    this.communityService.post(environment.workspace_url + WorkSpaceConfig.detailsCreate, '')
    .subscribe(data => {
      this.frameworkId = data['result']['_id'];
      this.router.navigate(['/workspace/create/Details'], { queryParams: { assesmentType: assesmenttype, id: this.frameworkId } });
      // this.router.navigateByUrl('/workspace/create/'+ assesmenttype + '/details/' + this.frameworkId);
    })

   

  }



}
