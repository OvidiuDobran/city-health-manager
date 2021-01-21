import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';
import { Reward } from './data/reward';
import { Observable } from 'rxjs';
import { NewsArticle } from './data/news';
import { City } from './data/city';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    constructor(private httpClient: HttpClient) {}

    createNewsArticle(newsArticle: NewsArticle): Observable<NewsArticle> {
        const url = 'http://localhost:8080/news/create';

        return this.httpClient.post<NewsArticle>(url, newsArticle, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    updateNewsArticle(newsArticle: NewsArticle): Observable<NewsArticle> {
        const url = 'http://localhost:8080/news/update';

        return this.httpClient.put<NewsArticle>(url, newsArticle, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    deleteNewsArticleById(id: number) {
        const url = 'http://localhost:8080/news/delete/' + id;

        return this.httpClient.delete<NewsArticle>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    getNewsByCity(city: City): Observable<NewsArticle[]> {
        const url = 'http://localhost:8080/news/all?cityName=' + city.name + '&countryName=' + city.country.name;

        return this.httpClient.get<NewsArticle[]>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    getArticleById(id: number): Observable<NewsArticle> {
        const url = 'http://localhost:8080/news/' + id;

        return this.httpClient.get<NewsArticle>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
}
