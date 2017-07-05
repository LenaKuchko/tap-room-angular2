import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './task.model';

@Conponent({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf='childSelectedKeg'>
    <h3>{{childSelectedKeg.name}}</h3>

    <h3>Edit Keg</h3>
    <label>Enter Task Description:</label>
    <input [(ngModel)]="childSelectedKeg.name">
    <input [(ngModel)]="childSelectedKeg.brand">
    <input [(ngModel)]="childSelectedKeg.price">
    <input [(ngModel)]="childSelectedKeg.alcoholContent">
    <input [(ngModel)]="childSelectedKeg.volume">
    <br>

    <button (click)='doneButtonClicked()' class='btn'>Save changes</button>
    </div>
  </div>
  `
})
