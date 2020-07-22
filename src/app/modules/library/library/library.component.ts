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
      routerLink: '/library/observation',
      label: 'Observations',
      tooltip: 'Observations'
    },
    {
      routerLink: '/library/assesment',
      label: 'Assesments',
      tooltip: 'Assesments'
    },
    {
      routerLink: '/library/improvements',
      label: 'Improvement Projects',
      tooltip: ' Improvement Projects'
    }
  ]
  activeLink = this.tabData[0]['label'];
  constructor(private router: Router,
    private commonService: CommonService) { }

  ngOnInit() {
  }

}
