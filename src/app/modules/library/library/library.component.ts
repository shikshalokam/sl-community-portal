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
      routerLink: '/library/observations',
      label: 'Observations',
      tooltip: 'Observations'
    },
    {
      routerLink: '/library/assesments',
      label: 'Assesments',
      tooltip: 'Assesments'
    },
    {
      routerLink: '/library/improvements',
      label: 'Improvement Projects',
      tooltip: ' Improvement Projects'
    }
  ]
  constructor(private router: Router,
    private commonService: CommonService) { }

  ngOnInit() {
  }

  commingSoon(){
    this.commonService.commonSnackBar('Comming soon', 'Dismiss', 'top', 10000)

  }

}
