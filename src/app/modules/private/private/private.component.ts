import { Component, OnInit } from '@angular/core';
import {  CommonService, AuthenticationService } from '../../portal-core';
import { KeycloakService } from 'keycloak-angular';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  userDetails: any;
  sideData: any;
  menudata = [
    {
      "icon": "local_library",
      "name": "Library",
      "action": "library",
      "url": "/library"
    }
    , {
      "icon": "folder",
      "name": "My Folder",
      "action": "folder",
      "url": "/myfolder"
    },
    {
      "icon": "dashboard",
      "name": "Portals",
      "action": "portals",
      "url": "/portals"
    },
    {
      "icon": "edit",
      "name": "Workspace",
      "action": "workspace",
      "url": "/workspace"
    },
    {
      "icon": "rate_review",
      "name": "Review",
      "action": "review",
      "url": "/review"
    },
    {
      "icon": "assignment_late",
      "name": "Support",
      "action": "support",
      "url": "/support"
    },
    {
      "icon": "help",
      "name": "Help",
      "url": "/help"
    },
    {
      "icon": "person",
      "name": "Logout",
      "url": "/logout"
    }
  ];
  constructor(private authenticationService: AuthenticationService,
    private Keycloak: KeycloakService, private translate: TranslateService) { }

  ngOnInit() {

  }

  logoutMethod(data) {
    this.authenticationService.doLogout();
  }

  changeLanguage(data) {
    this.translate.use(data);
  }

  selectedMenu(data) {
    if (data == 'Logout') {
      this.logoutMethod('logout');
    }
  }

}
