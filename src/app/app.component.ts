import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  constructor() {
    this.baseUrl = environment.base_url;
  }

  ngOnInit() {
  }

}

