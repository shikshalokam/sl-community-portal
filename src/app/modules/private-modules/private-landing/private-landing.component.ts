import { Component, OnInit } from '@angular/core';
import { TranslateService, GlobalConfigurationService } from 'shikshalokam';
import { AuthService } from '../auth-service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-private-landing',
  templateUrl: './private-landing.component.html',
  styleUrls: ['./private-landing.component.scss']
})
export class PrivateLandingComponent implements OnInit {
  isLoggedIn: boolean;
  programId;
  assessmentId;
  // links ;
  opened = true;
  pushMode = 'side';
  currentUser;
  logo = " ./assets/shikshalokam.png";
  baseUrl;
  portalName;
  links = [];
  List = [
    {
      icon: 'school',
      appName: 'Learning portal',
      redirecturl: 'https://dev.shikshalokam.org/resources'
    },
    {
      icon: ' dashboard ',
      appName: 'Unnati',
      redirecturl: 'https://dev.shikshalokam.org/'
    },
    {
      icon: 'assessment ',
      appName: 'Assessment portal',
      redirecturl: 'https://dev.shikshalokam.org/'
    },
    {
      icon: 'payment ',
      appName: 'Programs portal',
      redirecturl: 'https://dev.shikshalokam.org/'
    }
  ]
  constructor(private route: ActivatedRoute, private authService: AuthService,
     private translate: TranslateService) {
    localStorage.setItem('canAcess', JSON.stringify(['home', 'parent', 'report', 'configurations']));
    translate.use('en').then(() => {

    });
    if (window.screen.width < 760) { // 768px portrait
      this.opened = false;
      this.pushMode = 'push';
    }
    this.currentUser = this.authService.getCurrentUserDetails();
    this.baseUrl = environment.base_url;
    this.portalName = environment.portal_name;


    if (this.currentUser) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
    console.log('logout page ngOnInit');
  }

  onLogout() {
    console.log('===logout');
    this.authService.getLogout();
  }

}
