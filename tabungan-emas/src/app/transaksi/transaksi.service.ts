import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Penjualan } from './jual/jual.model';

@Injectable()
export class TransaksiService {

  constructor(public authHttp: AuthHttp) { }

  getDaftarTransaksi() {
	  console.log("Menjalankan service getDaftarTransaksi");
	  let dataTransaksi = [
	  	{tanggal: "1 Februari 2017", keterangan: "Saldo Awal", nilai: 0, saldo: 18},
	  	{tanggal: "2 Februari 2017", keterangan: "Pembelian di Gerai", nilai: 3, saldo: 21},
		{tanggal: "3 Februari 2017", keterangan: "Pembelian Online", nilai: 4, saldo: 25},
		{tanggal: "4 Februari 2017", keterangan: "Penjualan Online", nilai: -5, saldo: 20},
		{tanggal: "5 Februari 2017", keterangan: "Penjualan di Lelang", nilai: -4, saldo: 16},
		{tanggal: "6 Februari 2017", keterangan: "Pembelian Online", nilai: 10, saldo: 26}
	  ];
	  return Promise.resolve(dataTransaksi);
  }

  getHargaJualEmas(gram : number) : Promise<number> {
	  let url = "/api/harga/";

	  this.authHttp.get(url)
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('Request Complete')
      );

	  return Promise.resolve(gram * 575000);
  }

  getHargaBeliEmas(gram : number) {
	  return gram * 540000;
  }

  jual(p : Penjualan) : Promise<string> {
	  p.username = "test";

	  console.log("Menyimpan transaksi jual : "+JSON.stringify(p));

	  let url : string = "/api/jual/";
	  this.authHttp.post(url, p).toPromise()
	  .then(hasil => hasil.status)
	  .catch(error => console.log(error));

	  return Promise.resolve("success");
  }

}
