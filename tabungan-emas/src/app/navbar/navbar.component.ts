import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "Aplikasi Tabungan Emas";

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  currentUser() {
	  return this.authService.getUserInfo();
  }

  logout() : void {
	  this.authService.logout();
	  this.router.navigate(['login']);
  }

}
