import { Component, OnInit } from '@angular/core';
import { ClerkUser } from '../data/clerk-user';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clerkUser: ClerkUser;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    console.log('hey');
    this.clerkUser = this.sessionService.clerkUser;
    if (!this.clerkUser) {
      this.clerkUser = JSON.parse(localStorage.getItem('clerkUser'));
    }
    localStorage.setItem('clerkUser', JSON.stringify(this.clerkUser));
  }

}
