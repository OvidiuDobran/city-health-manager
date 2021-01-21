import { Injectable } from '@angular/core';
import { City } from './data/city';
import { GeographyService } from './geography.service';
import { ClerkUser } from './data/clerk-user';
import { ClerkUserService } from './clerk-user.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private geographyService: GeographyService, private clerkUserService: ClerkUserService) {}

    getCities(): City[] {
        return this.geographyService.getCities();
    }

    async getClerkUser(email: string, password: string, city: City): Promise<ClerkUser> {
        return await this.clerkUserService.getClerkUser(email, password, city);
    }
}
