import { Injectable } from '@angular/core';

import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const STORAGE_KEY_AUTH = "authentication";

@Injectable()
export class AuthService {

  constructor(private http : Http) { }

  sudahLogin() : boolean {
	  let ok = localStorage.getItem(STORAGE_KEY_AUTH) != null;
	  return ok;
  }

  getUserInfo() : any {
	  return JSON.parse(localStorage.getItem(STORAGE_KEY_AUTH));
  }

  login(username : string, password : string) : Promise<boolean> {
	  if(username == "endy" && password == "1234") {
		  let userObject = {
			  username: "endy",
			  fullname: "Endy Muhardin",
			  permissions: [
			  	"TRANSAKSI_VIEW",
				"TRANSAKSI_EDIT",
				"INFORMASI_VIEW"
			  ]
		  };
		  localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(userObject));
		  return Promise.resolve(true);
	  }

	  let url : string = "/oauth/token";
	  let body = new URLSearchParams()
	  body.append("grant_type", "password");
	  body.append("username", username);
	  body.append("password", password);

	  let basicAuthHeader = "Basic dGFidW5nYW5hbmd1bGFyOmFuZ3VsYXIzMjE=";
	  let headers = new Headers({
		  'Content-Type': 'application/x-www-form-urlencoded',
		  'Authorization' : basicAuthHeader
		  });
	  return this.http.post(url, body, {headers: headers}).toPromise()
	  .then(response => {
		  let token = response.json();
		  console.log(token);
		  if(token && token.access_token){
			  localStorage.setItem("access_token",token.access_token);
			  let userObject = {
				  username: username,
				  access_token: token.access_token
			  };
			  localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(userObject));
		  }
	  });
  }

  logout() : void {
	  localStorage.removeItem(STORAGE_KEY_AUTH);
  }

}
