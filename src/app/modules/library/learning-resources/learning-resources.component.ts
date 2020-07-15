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
  resourceData: any = [
    {
      "title": "Recently Added",
      "type": "card",
      "imageUrl": "",
      "description": "Recently added",
      "viewMoreUrl": "https://dev.shikshalokam.org",
      "totalCount": 4932,
      "resources": [
        {
          "url": "https://dev.shikshalokam.org/resources/play/content/do_2127561039911895041422",
          "title": " AWS - 10,000 Foot Overview (2019 course)",
          "description": "Enter description for Resource",
          "time": "2019-05-06T11:20:00.486+0000"
        },
        {
          "url": "https://dev.shikshalokam.org/resources/play/content/do_2127567452069724161593",
          "title": " Snowball Lab",
          "description": "Enter description for Resource",
          "time": "2019-05-07T09:04:33.897+0000"
        },
        {
          "url": "https://dev.shikshalokam.org/resources/play/content/do_21258040361213952015738",
          "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21258040361213952015738/artifact/download-3_1531474695189.thumb.jpg",
          "title": "!@#$%^&*()_+",
          "description": "",
          "time": "2018-08-31T05:36:40.308+0000"
        }
      ]
    },
    {
      "title": "Most Popular",
      "type": "card",
      "description": "Most popular",
      "totalCount": 4932,
      "viewMoreurl": "https://dev.shikshalokam.org",
      "resources": [
        {
          "url": "https://dev.shikshalokam.org/resources/play/content/do_2127561039911895041422",
          "title": " AWS - 10,000 Foot Overview (2019 course)",
          "description": "Enter description for Resource",
          "time": "2019-05-06T11:20:00.486+0000"
        },
        {
          "url": "https://dev.shikshalokam.org/resources/play/content/do_2127567452069724161593",
          "title": " Snowball Lab",
          "description": "Enter description for Resource",
          "time": "2019-05-07T09:04:33.897+0000"
        },
        {
          "url": "https://dev.shikshalokam.org/resources/play/content/do_21258040361213952015738",
          "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21258040361213952015738/artifact/download-3_1531474695189.thumb.jpg",
          "title": "!@#$%^&*()_+",
          "description": "",
          "time": "2018-08-31T05:36:40.308+0000"
        }
      ]
    }
  ];

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
    this.communityService.get(environment.base_url + LibraryConfig.learningResources
      + '&Category=' + data[0] + '&Language=' + data[1] + '&Subcategory=' + data[2] + '&Topic=' + data[3]).subscribe(data => {
        this.resourceData = data['result'];
      }, error => {

      })
  }

  getSelected(data) {
    this.getLearningResources(data['filterSelects']);
  }

}
