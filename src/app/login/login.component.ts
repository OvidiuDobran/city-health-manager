import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { City } from '../data/city';
import { ClerkUser } from '../data/clerk-user';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  cities: City[];
  selectedCity: City;

  loginFormIndex: number;
  loginFailed: boolean;

  constructor(private loginService: LoginService, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    this.cities = this.loginService.getCities();
    this.loginFormIndex = 0;
    this.loginFailed = false;
  }

  login(credentials: { username: string; password: string; }) {
    const clerkUser: ClerkUser = this.loginService.getClerkUser(credentials.username, credentials.password, this.selectedCity);
    this.loginFailed = !clerkUser;
    if (!this.loginFailed) {
      this.sessionService.clerkUser = clerkUser;
      this.router.navigate(['/session', { outlets: { view: ['home'] } }]);
    }
  }

  doNext(selectedCity: City) {
    this.loginFormIndex = 1;
    this.selectedCity = selectedCity;
  }

  doBack() {
    this.loginFormIndex = 0;
    this.loginFailed = false;
  }

  firstPageActive() {
    return this.loginFormIndex === 0;
  }


}
