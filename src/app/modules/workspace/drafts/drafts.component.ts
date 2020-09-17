import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../portal-core';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.commonSnackBar('Comming soon', 'Dismiss', 'top', 10000);
  }

}
