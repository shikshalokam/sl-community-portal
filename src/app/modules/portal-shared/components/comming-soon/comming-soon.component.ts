import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../portal-core';



@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.commonSnackBar('Comming soon', 'Dismiss', 'top', 10000);
  }

}
