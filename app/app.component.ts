import {Component} from '@angular/core';
import {Keg} from './keg.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <new-keg (newKegSender)='addKeg($event)'></new-keg>
  </div>
  `
})

export class AppComponent {
  // selectedKeg = null;

  masterKegList: Keg[];

  addKeg(kegToAdd: Keg) {
    this.masterKegList.push(kegToAdd);
  }
}
