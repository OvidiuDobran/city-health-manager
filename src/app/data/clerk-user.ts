import { City } from './city';

export class ClerkUser {
    [x: string]: any;
    firstName: string;
    lastName: string;
    email: string;
    city: City;
    token: string;

    constructor({ firstName, lastName, email, city, token }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.city = city;
        this.token = token;
    }
}
