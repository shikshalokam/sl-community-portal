import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-tab',
  templateUrl: './library-tab.component.html',
  styleUrls: ['./library-tab.component.scss']
})
export class LibraryTabComponent implements OnInit {

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
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['library/learning']);
  }

  tabSelect(data) {
    this.tab = data;
  }

}
