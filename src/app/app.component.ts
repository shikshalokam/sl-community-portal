import { Component } from '@angular/core';
import { TranslateService } from './core/services/translate-service/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.use('en').then(() => {
    
    });
  }

  links = [  
          { 
            linkHeading : "headings.features",
            options:[ 
                      
                      
                    ]  
            }
        ] ;
      
}

