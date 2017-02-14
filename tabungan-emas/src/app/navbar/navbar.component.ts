import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "Aplikasi Tabungan Emas";

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

}
