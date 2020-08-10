import { Component, OnInit, Output, EventEmitter, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService, } from 'keycloak-angular';


@Component({
  selector: 'app-community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.scss']
})
export class CommunityHeaderComponent implements OnInit {

  @Output() linkClick = new EventEmitter();
  @Output() toggle = new EventEmitter()

  constructor(private router: Router,
    private Keycloak: KeycloakService
  ) { }
  ngOnInit() {
    if (this.Keycloak.getKeycloakInstance().authenticated) {
      this.communityPortal();
    }
  }

  goTo(id) {
    this.linkClick.emit(id)
  }

  toggleNav() {
    this.toggle.emit();
  }

  communityPortal() {
    this.router.navigateByUrl('library/learning');
  }

}
