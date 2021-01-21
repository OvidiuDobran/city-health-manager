import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { City } from './data/city';
import { CityRank } from './data/city-rank';
import { Observable } from 'rxjs/internal/Observable';
import { CityStatus } from './data/city-status';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root'
})
export class GeographyService {
    constructor(private httpClient: HttpClient, private sessionService: SessionService) {}

    getCities(): City[] {
        const cities: City[] = [];
        const url = 'http://localhost:8080/geography/cities';
        this.httpClient.get(url, { headers: { skip: 'true' } }).subscribe(
            (res) => {
                const response = res as any[];
                response.forEach((element) => {
                    cities.push(new City(element.name, element.country.name));
                });
            },
            (err) => alert('An error has occurred while getting cities:' + err)
        );
        return cities;
    }

    getRanking(): Observable<CityRank[]> {
        const url = 'http://localhost:8080/geography/cities/ranking';

        console.log('User Token: ' + this.sessionService.clerkUser.token);
        return this.httpClient.get<CityRank[]>(url);
    }

    getCityStatus(cityName: string, countryName: string): Observable<CityStatus> {
        const url = 'http://localhost:8080/geography/city/status?cityName=' + cityName + '&countryName=' + countryName;
        return this.httpClient.get<CityStatus>(url);
    }
}
