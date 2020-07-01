import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-library-tab',
  templateUrl: './library-tab.component.html',
  styleUrls: ['./library-tab.component.scss']
})
export class LibraryTabComponent implements OnInit {

  tab: any = 'Learning';
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['library/learning']);
  }

  tabSelect(data) {
    this.tab = data;
  }

}
