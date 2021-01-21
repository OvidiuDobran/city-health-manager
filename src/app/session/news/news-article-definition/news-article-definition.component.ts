import { Component, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/data/news';
import { SessionService } from 'src/app/session.service';
import { NewsService } from 'src/app/news-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-news-article-definition',
    templateUrl: './news-article-definition.component.html',
    styleUrls: [ './news-article-definition.component.css' ]
})
export class NewsArticleDefinitionComponent implements OnInit {
    article: NewsArticle;
    title: string;
    content: string;

    constructor(
        private sessionService: SessionService,
        private newsService: NewsService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        if (id) {
            this.newsService.getArticleById(id).subscribe((article) => {
                if (article) {
                    this.article = article;
                    this.title = this.article.title;
                    this.content = this.article.content;
                }
            });
        }
    }

    onSave() {
        const savingReward = new NewsArticle({
            id: this.article ? this.article.id : null,
            title: this.title,
            content: this.content,
            city: this.sessionService.clerkUser.city,
            author: this.sessionService.clerkUser,
            creationDate: new Date()
        });
        if (this.article) {
            this.newsService.updateNewsArticle(savingReward).subscribe(() => this.saveCallback());
        } else {
            this.newsService.createNewsArticle(savingReward).subscribe(() => this.saveCallback());
        }
    }

    saveCallback() {
        this.title = '';
        this.content = '';
        this.router.navigate([ '/session', { outlets: { view: [ 'news' ] } } ]);
    }

    onDelete() {
        this.newsService.deleteNewsArticleById(this.article.id).subscribe(() => {
            this.router.navigate([ '/session', { outlets: { view: [ 'news' ] } } ]);
        });
    }
}
