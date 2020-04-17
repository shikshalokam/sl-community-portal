import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url: string = environment.base_url;
  dashboards: Array<Object> = [
    {
      icon: "school",
      tooltip: "headings.learning",
      url: this.url + "/resources"
    },
    // {
    //   icon:" assignment_turned_in",
    //   tooltip:"headings.assessments",
    //   url:this.url+"/assessments"
    // },
    {
      icon: "dashboard",
      tooltip: "headings.programs",
      url: this.url + "/programs"
    }
  ];
  constructor() { }

  ngOnInit() { }

}
