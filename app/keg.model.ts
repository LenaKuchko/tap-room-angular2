export class Keg {
  public full: boolean = true;
  public leftAmount: number = this.volume;

  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public volume: number){ }

  sellDrink(amountTaken: number)
  {
    this.leftAmount -= amountTaken;
  }
}
