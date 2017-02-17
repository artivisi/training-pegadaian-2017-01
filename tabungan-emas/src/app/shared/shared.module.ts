import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	HttpModule
  ],
  declarations: [  LoginComponent],
  providers: [ AuthService ],
  exports: [  ]
})
export class SharedModule { }
