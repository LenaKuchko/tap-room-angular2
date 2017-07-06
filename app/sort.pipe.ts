import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "sort",
  pure: false
})

export class SortPipe implements PipeTransform {
  transform(input: Keg[], desiredSort){
    if(desiredSort === 'upToFourPoint'){
      return input.filter(keg => keg.alcoholContent<4);
      // var sortedKegs = input.filter(function(keg){
      //   return keg.alcoholContent<6;
    } else if(desiredSort === 'aboveFourPoint') {
      return input.filter(keg => keg.alcoholContent>4);
    } else { return input; }
  }
}
