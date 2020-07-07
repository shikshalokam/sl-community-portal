import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardData: any;

  constructor() { }

  ngOnInit() {
    const creationTime = moment(this.cardData.time);
    const currentTime = moment();
    this.cardData.time = creationTime.from(currentTime);
  }


}
