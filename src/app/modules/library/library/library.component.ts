import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../portal-core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  tab: any = 'Learning';
  sideData: any;

  tabData = [
    {
      routerLink: '/library/learning',
      label: 'LEARNING',
      tooltip: 'Learning Resources'
    },
    {
      routerLink: '/library/observation',
      label: 'OBSERVATION',
      tooltip: 'Observations'
    },
    {
      routerLink: '/library/assesment',
      label: 'ASSESMENTS',
      tooltip: 'Assesments'
    },
    {
      routerLink: '/library/improvements',
      label: 'IMPROVEMENT',
      tooltip: ' Improvement Projects'
    }
  ]
//  This can be enabled once language translation is required

  // menudata = [
  //   {
  //     "icon": "local_library",
  //     "name": "SIDEMENU.LIBRARY",
  //     "action": "library",
  //     "url": "/library"
  //   }
  //   , {
  //     "icon": "folder",
  //     "name": "SIDEMENU.MYFOLDER",
  //     "action": "folder",
  //     "url": "/myfolder"
  //   }
  // ];

  activeLink = this.tabData[0]['label'];
  constructor(private router: Router,
    private commonService: CommonService,
    public translate: TranslateService) {
  }

  ngOnInit() {
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    // this.menu();
  }

  // menu() {
  //   for (let i = 0; i <= this.menudata.length-1; i++) {
  //     this.translate.get(this.menudata[i].name).subscribe(values => {
  //       this.menudata[i]['t_data'] = values;
  //     })
  //   }
  //   console.log('meny data', this.menudata);
  // }

}
