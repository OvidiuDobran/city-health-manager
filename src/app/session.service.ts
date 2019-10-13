import { Injectable } from '@angular/core';
import { ClerkUser } from './data/clerk-user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private mClerkUser: ClerkUser;

  constructor() { }

  set clerkUser(clerkUser: ClerkUser) {
    this.mClerkUser = clerkUser;
  }

  get clerkUser(): ClerkUser {
    return this.mClerkUser;
  }
}
