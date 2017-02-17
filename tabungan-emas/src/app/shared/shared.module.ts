import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
	  	tokenName: 'access_token'
	  }), http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	HttpModule
  ],
  declarations: [  LoginComponent],
  providers: [
  		AuthService,
		{
	      provide: AuthHttp,
	      useFactory: authHttpServiceFactory,
	      deps: [Http, RequestOptions]
	    }
	],
  exports: [  ]
})
export class SharedModule { }
