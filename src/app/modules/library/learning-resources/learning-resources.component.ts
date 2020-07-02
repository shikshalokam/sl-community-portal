import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../portal-core';
import { CommunityServiceService, KendraServiceService } from 'shikshalokam';
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
  constructor(private libraryService: LibraryService,
    private communityServiceService: CommunityServiceService,
    private kendraServiceService: KendraServiceService) { }

  ngOnInit() {
    this.getFilters();
    this.getLearningResources();


  }



  getFilters() {
    this.communityServiceService.get(environment.base_url + LibraryConfig.filterList).subscribe(data => {
      this.filtersData = data['result'];
    }, error => {

    })
  }


  getLearningResources() {
    this.communityServiceService.get(environment.base_url + LibraryConfig.learningResources).subscribe(data => {
      console.log('getLearningResources', data);
      this.resourceData = data['result']['data'];

    })
  }

}
