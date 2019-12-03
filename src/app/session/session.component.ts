import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService } from '../session.service';
import { ClerkUser } from '../data/clerk-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  currentClerkUser: ClerkUser;
  atHome: boolean;

  constructor(private sessionService: SessionService, private router: Router) { console.log('Constructor called'); }

  ngOnInit() {
    // save the current_user in the local storage so that the data is not lost at refresh
    this.currentClerkUser = this.sessionService.clerkUser;
    if (!this.currentClerkUser) {
      this.currentClerkUser = JSON.parse(localStorage.getItem('currentClerkUser'));
    }
    localStorage.setItem('currentClerkUser', JSON.stringify(this.currentClerkUser));


  }


}
