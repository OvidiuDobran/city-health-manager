import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';
import { Reward } from './data/reward';
import { Observable } from 'rxjs';
import { City } from './data/city';

@Injectable({
    providedIn: 'root'
})
export class RewardService {
    constructor(private httpClient: HttpClient, private sessionService: SessionService) {}

    createReward(reward: Reward): Observable<Reward> {
        const url = 'http://localhost:8080/reward/create';

        return this.httpClient.post<Reward>(url, reward, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    updateReward(reward: Reward): Observable<Reward> {
        const url = 'http://localhost:8080/reward/update';

        return this.httpClient.put<Reward>(url, reward, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    getRewardsByCity(city: City): Observable<Reward[]> {
        const url = 'http://localhost:8080/reward/all?cityName=' + city.name + '&countryName=' + city.country.name;

        return this.httpClient.get<Reward[]>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    getRewardById(id: number): Observable<Reward> {
        const url = 'http://localhost:8080/reward/' + id;

        return this.httpClient.get<Reward>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    deleteRewardById(id: number): Observable<Reward> {
        const url = 'http://localhost:8080/reward/delete/' + id;

        return this.httpClient.delete<Reward>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
}
