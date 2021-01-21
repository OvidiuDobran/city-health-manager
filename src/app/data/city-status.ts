import { City } from './city';

export class CityStatus {
    city: City;
    rank: number;
    allCount: number;
    newCount: number;
    inProgressCount: number;
    solvedCount: number;
    closedCount: number;
    rejectedCount: number;

    public CityStatus(
        city: City,
        rank: number,
        allCount: number,
        newCount: number,
        inProgressCount: number,
        solvedCount: number,
        closedCount: number,
        rejectedCount: number
    ) {
        this.city = city;
        this.rank = rank;
        this.allCount = allCount;
        this.newCount = newCount;
        this.inProgressCount = inProgressCount;
        this.solvedCount = solvedCount;
        this.closedCount = closedCount;
        this.rejectedCount = rejectedCount;
    }
}
