import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { RekeningModule } from './rekening/rekening.module';
import { TransaksiModule } from './transaksi/transaksi.module';
import { SharedModule } from './shared/shared.module';

import { CekLoginGuard } from './shared/ceklogin';
import { AuthService } from './shared/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

import { LoginComponent } from './shared/login/login.component';

const routingAplikasi: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "about", component: AboutComponent, canActivate: [CekLoginGuard] },
	{ path: "rekening", redirectTo: "/rekening", pathMatch: "full", canActivateChild: [CekLoginGuard]},
	{ path: "transaksi", redirectTo: "/transaksi", pathMatch: "full", canActivateChild: [CekLoginGuard]},
	{ path: "**", component: WelcomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	SharedModule,
	RekeningModule,
	TransaksiModule,
	RouterModule.forRoot(routingAplikasi)
  ],
  providers: [ CekLoginGuard, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
