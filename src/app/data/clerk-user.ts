import { City } from './city';

export class ClerkUser {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    city: City;

    constructor(firstName: String, lastName: String, email: String, password: String, city: City) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
    }


}
