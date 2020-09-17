import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-utilities',
  templateUrl: './create-utilities.component.html',
  styleUrls: ['./create-utilities.component.scss']
})
export class CreateUtilitiesComponent implements OnInit {

  tabData = [
    {
      routerLink: '/workspace/create/details',
      label: 'Details',
      tooltip: 'Learning Resources'
    },
    {
      routerLink: '/workspace/create/criteria',
      label: 'Criteria',
      tooltip: 'criteria'
    },
    {
      routerLink: '/workspace/create/questions',
      label: 'Questions',
      tooltip: 'Questions'
    },
    {
      routerLink: '/workspace/create/preview',
      label: 'Preview',
      tooltip: 'Preview'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
