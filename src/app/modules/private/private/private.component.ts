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
  loggedInRoles: any;
  rolesArray: any;
  menudata: any;
  observerData = [
    {
      "icon": "local_library",
      "name": "Library",
      "action": "library",
      "url": "/library",
      "subMenu": []
    }
    , {
      "icon": "folder",
      "name": "My Folder",
      "action": "folder",
      "url": "/myfolder",
      "subMenu": []
    },
    {
      "icon": "dashboard",
      "name": "Portals",
      "action": "portals",
      "url": "/portals",
      "subMenu": []
    },
    {
      "icon": "edit",
      "name": "Workspace",
      "action": "workspace",
      "url": "/workspace/create",
      "subMenu": [
        {
          "name": "Create",
          "url": "/workspace/create"
        },
        {
          "name": "All Solutions",
          "url": "/workspace/solutions"
        },
        {
          "name": "Drafts",
          "url": "/workspace/drafts"
        },
        {
          "name": "Submitted for Review",
          "url": "/workspace/submittedforreview"
        },
        {
          "name": "Published",
          "url": "/workspace/pulished"
        }
      ]
    },
    {
      "icon": "rate_review",
      "name": "Review",
      "action": "review",
      "url": "/review",
      "subMenu": []
    },
    {
      "icon": "assignment_late",
      "name": "Support",
      "action": "support",
      "url": "/support",
      "subMenu": []
    },
    {
      "icon": "help",
      "name": "Help",
      "url": "/help",
      "subMenu": []
    },
    {
      "icon": "person",
      "name": "Logout",
      "url": "/logout",
      "subMenu": []
    }
  ];
  adminData = [
    {
      "icon": "local_library",
      "name": "Library",
      "action": "library",
      "url": "/library",
      "subMenu": []
    }
    , {
      "icon": "folder",
      "name": "My Folder",
      "action": "folder",
      "url": "/myfolder",
      "subMenu": []
    },
    {
      "icon": "dashboard",
      "name": "Portals",
      "action": "portals",
      "url": "/portals",
      "subMenu": []
    },
    {
      "icon": "rate_review",
      "name": "Review",
      "action": "review",
      "url": "/review",
      "subMenu": []
    },
    {
      "icon": "assignment_late",
      "name": "Support",
      "action": "support",
      "url": "/support",
      "subMenu": []
    },
    {
      "icon": "help",
      "name": "Help",
      "url": "/help",
      "subMenu": []
    },
    {
      "icon": "person",
      "name": "Logout",
      "url": "/logout",
      "subMenu": []
    }
  ];
  constructor(private authenticationService: AuthenticationService,
    private Keycloak: KeycloakService, private translate: TranslateService,
    private commonService: CommonService) {

     }

 async ngOnInit() {
  const user = this.Keycloak.getKeycloakInstance();
  this.userDetails = user['profile'];
  this.loggedInRoles = await this.commonService.getUserRoles();
      if (this.loggedInRoles['result']) {
        this.rolesArray = this.loggedInRoles['result'].roles;
      }
      if (this.rolesArray.includes("DESIGNER")) {
        this.menudata = this.observerData;
      } else {
        this.menudata = this.adminData;
      }
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
