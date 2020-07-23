import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../portal-core';


@Component({
  selector: 'app-improvement-projects',
  templateUrl: './improvement-projects.component.html',
  styleUrls: ['./improvement-projects.component.scss']
})
export class ImprovementProjectsComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.commonSnackBar('Comming soon', 'Dismiss', 'top', 10000);
  }


}
