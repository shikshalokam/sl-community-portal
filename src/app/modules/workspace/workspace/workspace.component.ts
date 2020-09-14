import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  assesmentType: any;
  frameworkId: any;

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
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('queryParams', params);
      this.assesmentType = params['assesmentType'];
      this.frameworkId = params['id'];
  });
  }

  tabClick(tab){
    console.log('tabclick', tab);
    this.router.navigate(['/workspace/create/' + tab], { queryParams: { assesmentType: this.assesmentType, id: this.frameworkId } });
    // this.router.navigate(['/workspace/create/'+ tab], { queryParams: { assesmentType: this.assesmentType, id: this.frameworkId } });
  }

}
