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
    let data = ['', '', '', ''];
    this.getLearningResources(data);
  }


  getFilters() {
    this.communityService.get(environment.base_url + LibraryConfig.filterList).subscribe(data => {
      this.filtersData = data['result'];

    }, error => {

    })
  }


  getLearningResources(data) {
    this.spin = true;
    this.communityService.get(environment.base_url + LibraryConfig.learningResources
      + '&Category=' + data[0] + '&Language=' + data[1] + '&Subcategory=' + data[2] + '&Topic=' + data[3]).subscribe(data => {
        this.resourceData = data['result'];
        this.spin = false;
      }, error => {

      })
  }

  getSelected(data) {
    this.getLearningResources(data['filterSelects']);
  }

}
