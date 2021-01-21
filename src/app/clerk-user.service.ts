import { Injectable } from '@angular/core';
import { City } from './data/city';
import { ClerkUser } from './data/clerk-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class ClerkUserService {
    constructor(private httpClient: HttpClient) {}

    async getClerkUser(email: string, password: string, city: City): Promise<ClerkUser> {
        const httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                skip: 'true'
            }
        };
        httpOptions.headers.skip = 'true';
        const url = 'http://localhost:8080/session/login/clerk';
        const response = await this.httpClient
            .post(url, { email, password, cityName: city.name, countryName: city.country }, httpOptions)
            .toPromise();
        const clerk = new ClerkUser(response as ClerkUser);
        console.log('Clerk: ' + JSON.stringify(clerk));
        return clerk;
    }

    getClerk(email: string): Observable<ClerkUser> {
        const url = 'http://localhost:8080/clerk/' + email;
        return this.httpClient.get<ClerkUser>(url);
    }
}
