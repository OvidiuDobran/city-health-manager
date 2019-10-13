import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from 'src/app/data/city';

@Component({
  selector: 'app-city-login',
  templateUrl: './city-login.component.html',
  styleUrls: ['../login.component.css']
})
export class CityLoginComponent implements OnInit {

  @Input() cities: City[];
  @Output() next = new EventEmitter();
  selectedCityIndex: number;

  constructor() { }

  ngOnInit() {
    this.selectedCityIndex = 0;
  }

  retrieveSelectedCity() {
    this.next.emit(this.cities[this.selectedCityIndex]);
  }

  onOptionSelect(event: any) {
    this.selectedCityIndex = event.target.selectedIndex;
  }

}
