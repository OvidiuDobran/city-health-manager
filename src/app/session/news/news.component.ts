import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsArticle } from 'src/app/data/news';
import { NewsService } from 'src/app/news-service.service';
import { SessionService } from 'src/app/session.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: [ './news.component.css' ]
})
export class NewsComponent implements OnInit {
    news: NewsArticle[] = [];

    constructor(private rewardService: NewsService, private sessionService: SessionService) {}

    ngOnInit() {
        this.rewardService.getNewsByCity(this.sessionService.clerkUser.city).subscribe((news) => {
            news.forEach((article) => {
                this.news.push(
                    new NewsArticle({
                        id: article.id,
                        title: article.title,
                        author: article.author,
                        city: article.city,
                        content: article.content,
                        creationDate: article.creationDate
                    })
                );
            });
        });
    }
}
