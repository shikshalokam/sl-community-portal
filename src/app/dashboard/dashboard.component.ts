import { Component, OnInit } from '@angular/core';
import { environment } from '../../../src/environments/environment'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url = environment.base_url;
  constructor() {
  }

  ngOnInit() {
  }

}
