export class Keg {
  public full: boolean = true;
  public leftLiters = this.volume;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public volume: number){ }

  calculateLiterLeft(litersTaken: number)
  {
    return this.leftLiters -= litersTaken;
  }
}
