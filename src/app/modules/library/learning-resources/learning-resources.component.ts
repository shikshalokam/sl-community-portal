import { Component, OnInit } from '@angular/core';
import {CommunityService } from 'shikshalokam';
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

  
  constructor(private communityService: CommunityService) { }

  ngOnInit() {
    this.getFilters();
    this.getLearningResources();
  }


  getFilters() {
    this.communityService.get(environment.base_url + LibraryConfig.filterList).subscribe(data => {
      this.filtersData = data['result'];

    }, error => {

    })
  }


  getLearningResources() {
    this.communityService.get(environment.base_url + LibraryConfig.learningResources).subscribe(data => {
      this.resourceData = data['result'];
    }, error => {

    })
  }

  getSelected(data) {
    console.log('selected filters', data);

  }

}
