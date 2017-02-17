import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { JualComponent } from './jual/jual.component';
import { BeliComponent } from './beli/beli.component';
import { HistoryComponent } from './history/history.component';
import { TransaksiService } from './transaksi.service';

import { CekLoginGuard } from '../shared/ceklogin';

const routingTransaksi: Routes = [
	{ path: "transaksi/jual", component: JualComponent, canActivate: [CekLoginGuard] },
	{ path: "transaksi/beli", component: BeliComponent, canActivate: [CekLoginGuard] },
	{ path: "transaksi/history", component: HistoryComponent, canActivate: [CekLoginGuard] }
];

@NgModule({
  imports: [
    CommonModule,
	FormsModule,
	RouterModule.forChild(routingTransaksi)
  ],
  declarations: [JualComponent, BeliComponent, HistoryComponent],
  providers: [TransaksiService]
})
export class TransaksiModule { }
