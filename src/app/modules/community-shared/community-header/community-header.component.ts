import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.scss']
})
export class CommunityHeaderComponent implements OnInit {

  @Output() linkClick  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goTo(id) {
    this.linkClick.emit(id)
  }

}
