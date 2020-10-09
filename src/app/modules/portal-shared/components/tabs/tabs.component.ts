import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  assesmentType: any;
  frameworkId: any;
  @Input() tabData: any;

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.assesmentType = params['assesmentType'];
      this.frameworkId = params['id'];
  });
  }

  tabClick(tab){
    this.router.navigate(['/workspace/create/' + tab], { queryParams: { assesmentType: this.assesmentType, id: this.frameworkId } });
  }

}
