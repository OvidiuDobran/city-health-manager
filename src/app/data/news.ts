import { City } from './city';
import { ClerkUser } from './clerk-user';

export class NewsArticle {
    id: number;
    title: string;
    content: string;
    city: City;
    author: ClerkUser;
    creationDate: Date;

    constructor(news: {
        id: number;
        title: string;
        content: string;
        city: City;
        author: ClerkUser;
        creationDate: Date;
    }) {
        if (news.id) {
            this.id = news.id;
        }
        this.title = news.title;
        this.content = news.content;
        this.city = news.city;
        this.author = news.author;
        this.creationDate = news.creationDate;
    }
}
