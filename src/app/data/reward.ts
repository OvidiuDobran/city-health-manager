import { City } from './city';
import { ClerkUser } from './clerk-user';

export class Reward {
    id: number;
    title: string;
    cost: number;
    description: string;
    city: City;
    author: ClerkUser;
    creationDate: Date;

    constructor(reward: {
        id: number;
        title: string;
        cost: number;
        description: string;
        city: City;
        author: ClerkUser;
        creationDate: Date;
    }) {
        if (reward.id) {
            this.id = reward.id;
        }
        this.title = reward.title;
        this.cost = reward.cost;
        this.description = reward.description;
        this.city = reward.city;
        this.author = reward.author;
        this.creationDate = reward.creationDate;
    }
}
