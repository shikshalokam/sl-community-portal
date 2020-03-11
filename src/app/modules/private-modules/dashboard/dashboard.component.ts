import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { environment } from '../../../src/environments/environment'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url = environment.base_url;

  obj;

  dashboards=[];
  constructor() {
    this.obj={
      dashboards:[
        {
          icon:"school",
          tooltip:"headings.learning",
          url:this.url+"/learning"
        },
        // {
        //   icon:" assignment_turned_in",
        //   tooltip:"headings.assessments",
        //   url:this.url+"/assessments"
        // },
        {
          icon:"dashboard",
          tooltip:"headings.programs",
          url:this.url+"/programs"
        }
      ]
    }
  }

  ngOnInit() {
    console.log("vhgsdvfjhegfejr")
    this.dashboards=this.obj.dashboards;
  }

}
