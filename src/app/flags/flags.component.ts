import { Component } from '@angular/core';
import flagData from './data.json';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent {

  flags = flagData;
  
  

  log(){
    console.log(this.flags[249]);
  }
  
  searchText: string ='';
  regionText: string='';
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  onRegionEntered(regionValue: string){
    this.regionText = regionValue;
    console.log(this.regionText);
  }
}
