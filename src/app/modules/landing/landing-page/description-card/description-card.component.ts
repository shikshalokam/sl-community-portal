import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent implements OnInit {

  @Input() image;
  @Input() description;
  @Input() title;
  @Input() appName;
  @Input() logo;
  @Input() imagFirst;
  @Input() hideStartNow;
  @Input() link;

  keyclockBaseUrl = environment.keycloakBaseUrl + '/home';



  constructor() { }

  ngOnInit() {
  }

}
