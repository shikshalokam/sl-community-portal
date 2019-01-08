import { Component, OnInit } from '@angular/core';
import { environment } from '../../../src/environments/environment'

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
          tooltip:"Learning"
        },{
          icon:" assignment_turned_in",
          tooltip:"Assessments"
        }
      ]
    }
  }

  ngOnInit() {
    this.dashboards=this.obj.dashboards;
    console.log(this.dashboards, "this.dashboard");
  }

}
