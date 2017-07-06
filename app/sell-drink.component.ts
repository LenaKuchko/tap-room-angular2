import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'sell-drink',
  template: `
  <div *ngIf='childKegToSell'>
    <h3>{{childKegToSell.name}}</h3>
    <div>
      <label>How many pints you want to buy:</label>
      <input [(ngModel)]="quantity">
    </div>
    <button (click)="confirmClicked()">Confirm</button>
  </div>
  `
})

export class SellDrinkComponent {
  // @Input() childQuantity: number;
  @Input() childKegToSell: Keg;
  @Output() confirmButtonClickedSender = new EventEmitter();
  quantity: number = 0;

  confirmClicked()
  {
    this.childKegToSell.sellPintDrink(this.quantity);
    this.confirmButtonClickedSender.emit();
  }
}
