export class Keg {
  public full: boolean = true;
  public leftAmount: number = this.volume;

  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public volume: number){ }

  sellPintDrink(quantityTaken: number)
  {
    this.leftAmount -= quantityTaken * 0.125;
  }
}
