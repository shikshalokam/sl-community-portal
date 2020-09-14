import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../portal-core';

@Component({
  selector: 'app-submitted-for-review',
  templateUrl: './submitted-for-review.component.html',
  styleUrls: ['./submitted-for-review.component.scss']
})
export class SubmittedForReviewComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.commonSnackBar('Comming soon', 'Dismiss', 'top', 10000);
  }

}
