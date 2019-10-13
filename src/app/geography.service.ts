import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './data/city';
import { CITIES } from './data/mock-cities';

@Injectable({
  providedIn: 'root'
})
export class GeographyService {
  constructor(private httpClient: HttpClient) {}

  getCities(): City[] {
    const cities: City[] = [];
    const url = 'http://localhost:8080/geography/cities';
    this.httpClient.get(url).subscribe(
      res => {
        const response = res as any[];
        response.forEach(element => {
          cities.push(new City(element.name, element.countryName));
        });
      },
      err => alert('An error has occurred while getting cities')
    );
    return cities;
  }
}
