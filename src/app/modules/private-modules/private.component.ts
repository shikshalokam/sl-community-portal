import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TranslateService } from 'shikshalokam';
import { AuthService } from '../core-community/services/auth-service/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

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

  ngOnInit() { }

  onLogout() {
    this.authService.getLogout();
  }


}
