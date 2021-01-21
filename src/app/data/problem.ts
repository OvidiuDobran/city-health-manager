import { City } from './city';
import { ClerkUser } from './clerk-user';

export class Problem {
    id: number;
    longitude: number;
    latitude: number;
    address: string;
    description: string;
    city: City;
    category: string;
    citizenEmail: string;
    histories: ProblemHistory[];
    images: ProblemImage[];
    rating: number;

    constructor({
        id,
        longitude,
        latitude,
        address,
        description,
        category,
        city,
        citizenEmail,
        histories,
        images,
        rating
    }) {
        this.id = id;
        this.longitude = longitude;
        this.latitude = latitude;
        this.address = address;
        this.category = category;
        this.description = description;
        this.city = city;
        this.citizenEmail = citizenEmail;
        this.histories = histories;
        this.images = images;
        this.rating = rating;
    }

    public getCreationDate(): number {
        if (this.histories.length === 0) {
            return 0;
        }
        let creationDate = this.histories[0].creationDate;
        this.histories.forEach((history) => {
            if (history.creationDate < creationDate) {
                creationDate = history.creationDate;
            }
        });
        return creationDate;
    }

    public getLastHisotry(): ProblemHistory {
        if (this.histories.length === 0) {
            return null;
        }
        let lastHistory = this.histories[0];
        this.histories.forEach((history) => {
            if (history.creationDate > lastHistory.creationDate) {
                lastHistory = history;
            }
        });
        return lastHistory;
    }

    /**
     * Returns the sorted histories, in ascending order (sortOrder<0) or descending order (sortOrder>0)
     * @param sortOrder sort direction
     */
    public getSortedHistories(sortOrder: number): ProblemHistory[] {
        const sortedHistories = this.histories.sort((h1, h2) => {
            return sortOrder * (h1.creationDate - h2.creationDate);
        });
        return sortedHistories;
    }
}

export class ProblemHistory {
    creationDate: number;
    comment: string;
    status: string;
    clerk: string;
    changeType: ChangeType;
}

export class ProblemImage {
    name: string;
}

export enum STATUS {
    NEW = 'NEW',
    IN_PROGRESS = 'IN_PROGRESS',
    RESOLVED = 'RESOLVED',
    CLOSED = 'CLOSED',
    REJECTED = 'REJECTED'
}

export enum ChangeType {
    COMMENT = 'COMMENT',
    STATUS = 'STATUS',
    CREATION = 'CREATION'
}
