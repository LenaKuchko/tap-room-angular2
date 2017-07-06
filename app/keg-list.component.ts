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

    <h3 *ngFor="let currentKeg of childKegList | sort:sortFilter"><strong> <h2>{{currentKeg.name}}</h2></strong>
      <ul>
        <li>Brand: {{currentKeg.brand}}</li>
        <li>Price: {{currentKeg.price}}</li>
        <li>Alcohol Content: {{currentKeg.alcoholContent}}</li>
        <li>Volume (gallons): {{currentKeg.volume}}</li>
        <li [class]="remainderColor(currentKeg)">Amount Left (gallons): {{currentKeg.leftAmount}}</li>
      </ul>
      <button (click)="editButtonClicked(currentKeg)">Edit</button>
      <button (click)="buyDrinkClicked(currentKeg)">Buy drink</button>
    </h3>
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
    // console.log(currentKeg);
    // currentKeg.sellPintDrink(1);
  }
  remainderColor(currentKeg)
  {
    console.log(currentKeg.leftAmount);
    if (currentKeg.leftAmount >= 5){
      return "full";
    } else if(currentKeg.leftAmount <=5 && currentKeg.leftAmount > 1){
        return "middle";
    } else if(currentKeg.leftAmount <=1){
      return "empty"
    }
  }

  onChange(optionFromMenu) {
    this.sortFilter = optionFromMenu;
  }
}
