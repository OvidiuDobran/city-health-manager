import { City } from './city';

export class CityRank {
    city: City;
    rank: number;
    noOfProblems: number;

    constructor(city: City, rank: number, noOfProblems: number) {
        this.city = city;
        this.rank = rank;
        this.noOfProblems = noOfProblems;
    }
}
