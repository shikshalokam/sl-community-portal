import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../community-core';
import { keyCloakService } from '../../private-modules/key-cloack/keycloak.service';


@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrls: ['./learning-resources.component.scss']
})
export class LearningResourcesComponent implements OnInit {
  filtersData: any;
  resourceData: any;
  menudata = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 3 }, { value: 3 }];
  constructor(private libraryService: LibraryService,
    private keyCloakService: keyCloakService) { }

  ngOnInit() {
    this.getFilters();
    this.getLearningResources();
  }

  getFilters() {
    this.libraryService.getFilterList().subscribe(data => {
      console.log('getFilters', data['result']);
      this.filtersData = data['result']
    }, error => {

    })
  }


  getLearningResources() {
    this.libraryService.getLearningResources().subscribe(data => {
      console.log('getLearningResources', data);
      this.resourceData = data['result']['data'];

    })
  }

}
