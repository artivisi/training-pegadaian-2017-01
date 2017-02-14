import { Component, OnInit } from '@angular/core';

import { TransaksiService } from '../transaksi.service';
import { Penjualan } from './jual.model';

@Component({
	selector: 'app-jual',
	templateUrl: './jual.component.html',
	styleUrls: ['./jual.component.css']
})
export class JualComponent implements OnInit {

	penjualan : Penjualan = new Penjualan(1,0);

	constructor(private transaksiService : TransaksiService) { }

	ngOnInit() {
		this.updateHarga();
	}

	updateHarga() : void {
		this.transaksiService.getHargaJualEmas(1)
		.then(hasil => {
			this.penjualan.harga = hasil;
		});
	}

	jual() : void {
		this.transaksiService.jual(this.penjualan)
		.then( hasil => {
			console.log("Penjualan berhasil disimpan");
			this.penjualan = new Penjualan(1,0);
			this.updateHarga();
		});
	}

}
