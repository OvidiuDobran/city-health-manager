import { Component, OnInit, Input } from '@angular/core';
import { ClerkUser } from 'src/app/data/clerk-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: ClerkUser;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
