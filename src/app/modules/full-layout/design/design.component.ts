import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
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
      "url": "/myfolder/sample"
    },
    {
      "icon": "dashboard",
      "name": "Portals",
      "action": "portals",
      "url": "/portals1"
    },
    {
      "icon": "edit",
      "name": "Workspace",
      "action": "workspace",
      "url": "private/workspace"
    },
    {
      "icon": "rate_review",
      "name": "Review",
      "action": "review",
      "url": "/home"
    },
    {
      "icon": "assignment_late",
      "name": "Support",
      "action": "support",
      "url": "/home1"
    },
    {
      "icon": "help",
      "name": "Help",
      "url": "/help1"
    }
  ];
  constructor(private router: Router) {
   }

  ngOnInit() {
  }

}
