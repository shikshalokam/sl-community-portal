import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'shikshalokam';
import { LibraryConfig } from '../library.config';
import { environment } from 'src/environments/environment';
import { CommonService } from '../../portal-core';



@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrls: ['./learning-resources.component.scss']
})
export class LearningResourcesComponent implements OnInit {
  filtersData: any;
  resourceData: any;
  spin: boolean = true;

  constructor(private communityService: CommunityService,
    private commonService: CommonService) { }

  ngOnInit() {
    this.getFilters();
  }


  getFilters() {
    this.communityService.get(environment.base_url + LibraryConfig.filterList).subscribe(data => {
      this.filtersData = data['result'];
    }, error => {
      this.commonService.commonSnackBar(error['message'], 'Dismiss', 'top', 10000);
    })
  }

// To get learning resources data
  getLearningResources(data) {
      let filterData = {
        filters: data
    }
    this.spin = true;
    this.communityService.post(environment.base_url + LibraryConfig.learningResources + '?limit='+ 3 + '&page='+ 1, filterData).subscribe(data => {
        this.resourceData = data['result'];
        this.spin = false;
      }, err => {
        this.spin = false;
        this.commonService.commonSnackBar(err['message'], 'Dismiss', 'top', 10000);

      })
  }

  getSelected(data) {
    this.getLearningResources(data);
  }

}
