import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  tabData = [
      {
        routerLink: '/workspace/create/Details',
        label: 'Details',
        tooltip: 'Learning Resources'
      },
      {
        routerLink: '/workspace/create/Criteria',
        label: 'Criteria',
        tooltip: 'criteria'
      },
      {
        routerLink: '/workspace/create/Questions',
        label: 'Questions',
        tooltip: 'Questions'
      },
      {
        routerLink: '/workspace/create/Preview',
        label: 'Preview',
        tooltip: 'Preview'
      }
  ]
  constructor() { }

  ngOnInit() {
    
  }


}
