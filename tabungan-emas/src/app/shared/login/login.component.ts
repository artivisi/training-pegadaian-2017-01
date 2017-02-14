import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  login() : void {
	  console.log("Username : "+this.username);
	  console.log("Password : "+this.password);
	  this.authService.login(this.username, this.password)
	  .then(sukses => {
		  console.log("Hasil login : "+sukses)
		  if(sukses){
			  this.router.navigate(['/']);
		  }
	  });
  }
}
