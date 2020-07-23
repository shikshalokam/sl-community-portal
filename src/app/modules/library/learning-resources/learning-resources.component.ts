import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'shikshalokam';
import { LibraryConfig } from '../library.config';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrls: ['./learning-resources.component.scss']
})
export class LearningResourcesComponent implements OnInit {
  filtersData: any;
  resourceData: any;
  spin: boolean = true;

  constructor(private communityService: CommunityService) { }

  ngOnInit() {
    this.getFilters();
  }


  getFilters() {
    this.communityService.get(environment.base_url + LibraryConfig.filterList).subscribe(data => {
      this.filtersData = data['result'];

    }, error => {

    })
  }


  getLearningResources(data) {
      if(data) {
        data.pageSize = 3;
        data.pageNo = 1
      }
    this.spin = true;
    this.communityService.post(environment.base_url + LibraryConfig.learningResources, data).subscribe(data => {
        this.resourceData = data['result'];
        this.spin = false;
      }, error => {
        this.spin = false;
      })
  }

  getSelected(data) {
    this.getLearningResources(data);
  }

}
