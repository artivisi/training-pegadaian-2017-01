import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';
import { SaldoComponent } from './saldo/saldo.component';
import { MutasiComponent } from './mutasi/mutasi.component';

const routingRekening: Routes = [
	{ path: "rekening/saldo", component: SaldoComponent },
	{ path: "rekening/mutasi", component: MutasiComponent }
];

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forChild(routingRekening)
  ],
  declarations: [SaldoComponent, MutasiComponent]
})
export class RekeningModule { }
