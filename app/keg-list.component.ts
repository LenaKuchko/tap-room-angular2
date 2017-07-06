import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allDrinks" selected="selected">All Drinks</option>
      <option value="upToFourPoint">Weak Beer</option>
      <option value="aboveFourPoint">Strong Beer</option>
    </select>

    <button (click)="happyHourClicked()">Happy hour</button>

    <h4 *ngFor="let currentKeg of childKegList | sort:sortFilter"><strong> <h3><input type="checkbox" [checked]="addKegToHappyHour" (change)="!addKegToHappyHour"/>{{currentKeg.name}}</h3></strong>
      <ul>
        <li>Brand: {{currentKeg.brand}}</li>
        <li>Price: {{currentKeg.price}}</li>
        <li>Alcohol Content: {{currentKeg.alcoholContent}}</li>
        <li>Volume (gallons): {{currentKeg.volume}}</li>
        <li [class]="remainderColor(currentKeg)">Amount Left (gallons): {{currentKeg.leftAmount}}</li>
      </ul>
      <button (click)="editButtonClicked(currentKeg)">Edit</button>
      <button (click)="buyDrinkClicked(currentKeg)">Buy drink</button>
    </h4>
  `
})

export class KegListComponent {
  sortFilter: string = "allDrinks";
  @Input() childKegList : Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickBuyDrinkSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg)
  {
    this.clickSender.emit(kegToEdit);
  }

  buyDrinkClicked(currentKeg)
  {
    this.clickBuyDrinkSender.emit(currentKeg);
  }

  remainderColor(currentKeg)
  {
    if (currentKeg.leftAmount >= 5){
      return "bg-info";
    } else if(currentKeg.leftAmount <=5 && currentKeg.leftAmount > 1){
        return "bg-danger";
    } else if(currentKeg.leftAmount <=1){
      return "bg-success";
    }
  }

  onChange(optionFromMenu) {
    this.sortFilter = optionFromMenu;
  }

  happyHourClicked()
  {

  }
}
