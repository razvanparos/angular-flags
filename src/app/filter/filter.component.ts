import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  regions = ['All', 'Africa', 'America', 'Asia','Europe','Oceania'];
  selectedRegion: string = '';
  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  regionChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

  onSelectedRegion(){
    this.regionChanged.emit(this.selectedRegion);
    
  }
}
