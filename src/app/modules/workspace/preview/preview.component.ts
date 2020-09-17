import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../portal-core';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.commonSnackBar('Comming soon', 'Dismiss', 'top', 10000);
  }

}
