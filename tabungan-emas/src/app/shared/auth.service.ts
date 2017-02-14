import { Injectable } from '@angular/core';

const STORAGE_KEY_AUTH = "authentication";

@Injectable()
export class AuthService {

  constructor() { }

  sudahLogin() : boolean {
	  let ok = localStorage.getItem(STORAGE_KEY_AUTH) != null;
	  return ok;
  }

  getUserInfo() : any {
	  return localStorage.getItem(STORAGE_KEY_AUTH);
  }

  login(username : string, password : string) : boolean {
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
		  return true;
	  }
	  return false;
  }

  logout() : void {
	  localStorage.removeItem(STORAGE_KEY_AUTH);
  }

}
