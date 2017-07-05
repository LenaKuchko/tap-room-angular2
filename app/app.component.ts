import {Component} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <h3>All available kegs</h3>
    <button (click)='startAdding()' >Add</button>
    <keg-list [childKegList]="masterKegList" (clickSender)='editKeg($event)'></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]='selectedKeg' (doneButtonClickedSender)='finishedEditing()'></edit-keg>
    <new-keg [startAdd]='start' (newKegSender)='addKeg($event)'></new-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg = null;
  start: boolean = false;

  masterKegList: Keg[] = [
    new Keg("Keg1", "Belgium", 45, 3, 5)
  ];

  addKeg(kegToAdd: Keg) {
    this.masterKegList.push(kegToAdd);
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg: Keg)
  {
    this.selectedKeg = clickedKeg;
  }

  startAdding()
  {
    this.start = true;
  }
}
