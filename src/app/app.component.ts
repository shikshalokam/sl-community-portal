import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { keyCloakService } from './modules/portal-core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoggedIn: boolean;
  programId;
  assessmentId;
  portalName;
  baseUrl;

  constructor(private keycloakService: keyCloakService) {
    this.baseUrl = environment.base_url;
    this.portalName = environment.portal_name;
  }

  ngOnInit() {
    this.getBasicdetails();
  }



  getBasicdetails() {
    this.keycloakService.setToken();
  }





}

