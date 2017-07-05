import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <h3 *ngFor="let currentKeg of childKegList"><strong> <h2>{{currentKeg.name}}</h2></strong>
      <ul>
        <li>Name: {{currentKeg.brand}}</li>
        <li>Brand: {{currentKeg.price}}</li>
        <li>Alcohol Content: {{currentKeg.alcoholContent}}</li>
        <li>Volume: {{currentKeg.volume}}</li>
      </ul>
      <button (click)="editButtonClicked(currentKeg)">Edit</button>
      <button (click)="showInfoButtonClicked(currentKeg)">Show Info</button>
      <button (click)=""></button>
    </h3>
  `
})


export class KegListComponent {
  @Input() childKegList : Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg)
  {
    this.clickSender.emit(kegToEdit);
  }
}
