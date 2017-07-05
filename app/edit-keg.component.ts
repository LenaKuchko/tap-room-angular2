import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf='childSelectedKeg'>
      <h3>{{childSelectedKeg.name}}</h3>
      <h3>Edit Keg</h3>
      <div>
        <label>Enter Keg Name:</label>
        <input [(ngModel)]="childSelectedKeg.name">
      </div>
      <div>
        <label>Enter Keg Brand:</label>
        <input [(ngModel)]="childSelectedKeg.brand">
      </div>
      <div>
        <label>Enter Keg Price:</label>
        <input [(ngModel)]="childSelectedKeg.price">
      </div>
      <div>
        <label>Enter Keg Alcohol Content:</label>
        <input [(ngModel)]="childSelectedKeg.alcoholContent">
      </div>
      <div>
        <label>Enter Keg Volume:</label>
        <select [(ngModel)]="childSelectedKeg.volume">
          <option  [value]="5"> 5 gal </option>
          <option [value]="7"> 7 gal </option>
          <option [value]="10"> 10 gal </option>
          <option [value]="15"> 15 gal </option>
        </select>
      </div>
       <button (click)='doneButtonClicked()' class='btn'>Save changes</button>
      <br>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
