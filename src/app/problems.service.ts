import { Injectable } from '@angular/core';
import { Problem } from './data/problem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root'
})
export class ProblemsService {
    constructor(private httpClient: HttpClient, private sessionService: SessionService) {}

    getProblem(id: number): Observable<Problem> {
        const url = 'http://localhost:8080/problem/' + id;
        return this.httpClient.get<Problem>(url);
    }

    getProblemsByStatus(status: string): Problem[] {
        const problems: Problem[] = [];
        const url =
            'http://localhost:8080/problem/all?status=' +
            status +
            '&cityName=' +
            this.sessionService.clerkUser.city.name +
            '&countryName=' +
            this.sessionService.clerkUser.city.country.name;
        this.httpClient.get(url).subscribe(
            (res) => {
                const response = res as any[];
                response.forEach((element) => {
                    problems.push(new Problem(element));
                });
            },
            (err) => alert('An error has occurred while getting cities')
        );
        return problems;
    }

    updateProblemStatus(problemId: number, status: string): Observable<Problem> {
        const url =
            'http://localhost:8080/problem/status?problemId=' +
            problemId +
            '&statusName=' +
            status +
            '&clerkEmail=' +
            this.sessionService.clerkUser.email;

        return this.httpClient.post<Problem>(
            url,
            {},
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }
        );
    }

    getFile(fileName: string): Observable<any> {
        return this.httpClient.get('http://localhost:8080/problem/download/image/' + fileName, {
            responseType: 'blob'
        });
    }

    addComment(problemId: number, comment: string): Observable<Problem> {
        const url =
            'http://localhost:8080/problem/comment?problemId=' +
            problemId +
            '&comment=' +
            comment +
            '&clerkEmail=' +
            this.sessionService.clerkUser.email;

        return this.httpClient.post<Problem>(
            url,
            {},
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }
        );
    }
}
