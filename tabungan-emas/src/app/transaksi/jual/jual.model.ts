export class Penjualan {

	username : string;

	constructor(public gram : number, public harga : number){}
	getNilai() : number {
		return this.harga * this.gram;
	}
}
