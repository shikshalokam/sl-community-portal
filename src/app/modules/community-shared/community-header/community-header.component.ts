import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.scss']
})
export class CommunityHeaderComponent implements OnInit {

  @Output() linkClick  = new EventEmitter();
  baseUrl = environment.keycloakBaseUrl + '/home';

  constructor() { }

  ngOnInit() {
  }

  goTo(id) {
    this.linkClick.emit(id)
  }

}
