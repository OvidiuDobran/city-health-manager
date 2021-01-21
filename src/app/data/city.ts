export class City {
    name: string;
    country: Country;

    constructor(name: string, country: Country) {
        this.name = name;
        this.country = country;
    }
}

export class Country {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
