import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  template:`
  <div *ngIf='startAdd'>
    <h1>New Keg</h1>
    <div>
      <label>Enter Keg Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Keg Brand Name:</label>
      <input #newBrandName>
    </div>
    <div>
      <label>Enter Price:</label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter alcoholContent:</label>
      <input #newAlcoholContent>
    </div>
    <div>
      <label>Enter Volume:</label>
      <select #newVolume>
        <option [value]="5"> 5 gal </option>
        <option [value]="7"> 7 gal </option>
        <option [value]="10"> 10 gal </option>
        <option [value]="15"> 15 gal </option>
      </select>
      <button class='btn' (click)='submitForm(newName.value, newBrandName.value, newPrice.value, newAlcoholContent.value, newVolume.value)'>Add</button>
    </div>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  @Output() addButtonClickedSender = new EventEmitter();
  @Input() startAdd: boolean;

  submitForm(name: string, brand: string, price: number, alcoholContent: number, volume: number) {
    const newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent, volume);
    this.newKegSender.emit(newKegToAdd);
  }
}
