import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from './modules/private-modules/auth-service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoggedIn:boolean;
  programId;
  assessmentId;
  portalName;
  // links ;
  opened = true;
  pushMode = 'side';
  currentUser;
  baseUrl;
  logo =" ./assets/shikshalokam.png";
  roleAcess=[];
 
  constructor(private route : ActivatedRoute,
    // private authService :AuthService,
    private router: Router ) {

    if (window.screen.width < 760) { // 768px portrait
      this.opened = false;
      this.pushMode = 'push';
    }
    // this.currentUser = this.authService.getCurrentUserDetails();
    this.baseUrl=environment.base_url;
    this.portalName = environment.portal_name;


    if(this.currentUser){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
      // this.currentUser = "blank"
    }
    // console.log(this.isLoggedIn)
   }

  ngOnInit() {
    // this.router.navigate(['/private/learning'])
  }
   
  onLogout(){
    // this.authService.getLogout();
    this.onLogin();
  } 
  onLogin(){
    // this.authService.init({onload:'login-required'});
    console.log("login Called")
    // this.authService.getLogin();
  }
  onResize(event)
  {
    if(event.target.innerWidth < 760)
    {
      this.opened = false;
      this.pushMode = 'push';
    }
    else{
      this.opened = true;
      this.pushMode = 'side';

    }
  }



 
      
}

