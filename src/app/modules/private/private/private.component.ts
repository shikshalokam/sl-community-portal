import { Component, OnInit } from '@angular/core';
import { keyCloakService, CommonService } from '../../portal-core';


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  userDetails: any;
  menudata = [
    {
      "icon": "local_library",
      "name": "Library",
      "action": "library",
      "url": "/library"
    }, {
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
  constructor(private keycloakService: keyCloakService,
    private commonService: CommonService) { }

  ngOnInit() {
    this.userDetails = this.commonService.getUserDetails()
  }

  logoutMethod(data) {
    this.keycloakService.logout();
  }

  selectedMenu(data) {
    if (data == 'Logout') {
      this.logoutMethod('logout');
    }
  }

}
