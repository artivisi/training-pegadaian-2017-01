import { Component, OnInit } from '@angular/core';

import {TransaksiService} from '../transaksi.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  dataTransaksi = [];

  constructor(private transaksiService : TransaksiService) { }

  ngOnInit() {
	  this.transaksiService.getDaftarTransaksi()
	  .then(hasil => this.dataTransaksi = hasil);

	  /*
	  .then(prosesHasilnya);

	  var prosesHasilnya = function(hasil) {
	  	this.dataTransaksi = hasil;
	  }
	  */
  }

}
