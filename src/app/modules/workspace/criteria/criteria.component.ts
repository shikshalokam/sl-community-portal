import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../portal-core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.commonSnackBar('Comming soon', 'Dismiss', 'top', 10000);
  }

}
