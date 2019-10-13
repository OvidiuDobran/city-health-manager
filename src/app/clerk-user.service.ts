import { Injectable } from '@angular/core';
import { CLERK_USERS } from './data/mock-clerk-users';
import { City } from './data/city';
import deepEqual from 'deep-equal';
import { ClerkUser } from './data/clerk-user';


@Injectable({
  providedIn: 'root'
})
export class ClerkUserService {

  constructor() { }

  getClerkUsers(): ClerkUser[] {
    return CLERK_USERS.map(clerk => new ClerkUser(clerk.firstName, clerk.lastName, clerk.email, clerk.password, clerk.city));
  }

  getClerkUser(email: string, password: string, city: City): ClerkUser {
    return this.getClerkUsers().find(clerk => clerk.email === email && clerk.password === password && deepEqual(clerk.city, city));
  }
}
