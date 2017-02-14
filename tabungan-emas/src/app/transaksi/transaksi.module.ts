import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';
import { JualComponent } from './jual/jual.component';
import { BeliComponent } from './beli/beli.component';
import { HistoryComponent } from './history/history.component';
import { TransaksiService } from './transaksi.service';

const routingTransaksi: Routes = [
	{ path: "transaksi/jual", component: JualComponent },
	{ path: "transaksi/beli", component: BeliComponent },
	{ path: "transaksi/history", component: HistoryComponent }
];

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forChild(routingTransaksi)
  ],
  declarations: [JualComponent, BeliComponent, HistoryComponent],
  providers: [TransaksiService]
})
export class TransaksiModule { }
