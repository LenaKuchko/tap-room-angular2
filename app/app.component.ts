import {Component} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <h3>All available kegs</h3>
    <keg-list [childKegList]="masterKegList"></keg-list>
    <hr>
    <new-keg (newKegSender)='addKeg($event)'></new-keg>
  </div>

  `
})

export class AppComponent {
  // selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg("Keg1", "Belgium", 45, 3, 5)
  ];

  addKeg(kegToAdd: Keg) {
    this.masterKegList.push(kegToAdd);
    console.log(this.masterKegList);
  }
}
