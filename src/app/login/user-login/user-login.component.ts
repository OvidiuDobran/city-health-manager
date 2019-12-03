import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['../login.component.css']
})
export class UserLoginComponent implements OnInit {

  @Input() username: string;
  @Input() password: string;
  @Input() displayError: boolean;
  @Output() login = new EventEmitter();
  @Output() back = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clearLoginFields() {
    const usernameCopy = this.username.slice();
    const passwordCopy = this.password.slice();
    this.username = this.password = '';
    this.login.emit({
      username: usernameCopy,
      password: passwordCopy
    });
  }

}
