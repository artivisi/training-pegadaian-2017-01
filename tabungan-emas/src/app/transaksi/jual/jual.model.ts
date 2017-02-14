export class Penjualan {
	constructor(public gram : number, public harga : number){}
	getNilai() : void {
		return this.harga * this.gram;
	}
}
