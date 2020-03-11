import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  AuthService } from '../../../modules/private-modules/auth-service/auth.service';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.scss']
})
export class CommunityHeaderComponent implements OnInit {

  @Output() linkClick = new EventEmitter();
  @Output() toggle = new EventEmitter()
  baseUrl = environment.keycloakBaseUrl + '/home';
  currentUser ;

  constructor(private authService: AuthService, private router: Router,
   ) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUserDetails();
    console.log("headree");
    console.log(this.currentUser)
  }

  goTo(id) {
    this.linkClick.emit(id)
  }

  toggleNav() {
    this.toggle.emit();
  }

  login() {
    this.router.navigateByUrl('private/dashboard');
  //  this.authService.init();
  }

}
