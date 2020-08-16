import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.scss']
})
export class CommunityHeaderComponent implements OnInit {

  @Output() linkClick  = new EventEmitter();
  @Output() toggle = new EventEmitter()
  baseUrl = environment.keycloakBaseUrl + '/resources';

  constructor() { }

  ngOnInit() {
  }

  goTo(id) {
    this.linkClick.emit(id)
  }

  toggleNav() {
    console.log("hiiii")
    this.toggle.emit();
  }

}
