import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../portal-core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  tab: any = 'Learning';
  tabData = [
    {
      routerLink: '/library/learning',
      label: 'Learning Resources',
      tooltip: 'Learning Resources'
    },
    {
      routerLink: '/library/comming-soon',
      label: 'Observations',
      tooltip: 'Observations'
    },
    {
      routerLink: '/library/comming-soon',
      label: 'Assesments',
      tooltip: 'Assesments'
    },
    {
      routerLink: '/library/comming-soon',
      label: 'Improvement Projects',
      tooltip: ' Improvement Projects'
    }
  ]
  constructor(private router: Router,
    private commonService: CommonService) { }

  ngOnInit() {
  }

  commingSoon(data) {
    if(data == 'Learning Resources'){
    } else {
    this.commonService.commonSnackBar('Comming soon', 'Dismiss', 'top', 10000);
    }

  }

}
