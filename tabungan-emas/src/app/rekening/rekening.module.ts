import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';
import { SaldoComponent } from './saldo/saldo.component';
import { MutasiComponent } from './mutasi/mutasi.component';

import { CekLoginGuard } from '../shared/ceklogin';

const routingRekening: Routes = [
	{ path: "rekening/saldo", component: SaldoComponent },
	{ path: "rekening/mutasi", component: MutasiComponent, canActivate: [CekLoginGuard] }
];

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forChild(routingRekening)
  ],
  declarations: [SaldoComponent, MutasiComponent],
  providers: [ CekLoginGuard ]
})
export class RekeningModule { }
