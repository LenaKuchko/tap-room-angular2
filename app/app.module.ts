import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {NewKegComponent} from './new-keg.component';
import {KegListComponent} from './keg-list.component';
import {EditKegComponent} from './edit-keg.component';
import {SellDrinkComponent} from './sell-drink.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent,
                  NewKegComponent,
                  KegListComponent,
                  EditKegComponent,
                  SellDrinkComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
