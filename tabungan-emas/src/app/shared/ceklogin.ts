import { Injectable }     from '@angular/core';
import { CanActivate, CanActivateChild }    from '@angular/router';

import { AuthService } from './auth.service';
import { Router }   from '@angular/router';

@Injectable()
export class CekLoginGuard implements CanActivate, CanActivateChild {

  constructor(private auth : AuthService, private router : Router){}

  canActivate() {
    console.log('AuthGuard#canActivate called');
	if(!this.auth.sudahLogin()) {
		this.router.navigate(['login']);
		return false;
	}
    return true;
  }

  canActivateChild() {
	  console.log('AuthGuard#canActivateChild called');
      return this.canActivate();
  }
}
