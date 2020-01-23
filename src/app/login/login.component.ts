import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { FunctionClass } from '../globals/function';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  validation = false;
  constructor(private router: Router, private functions: FunctionClass) { }

  ngOnInit() {
    this.functions.hideShowSettings(true);
  }

  // for Login. Hard coded username and password
  login() {
    if (this.username && this.password) {
      if (this.username === 'admin' && this.password === 'admin') {
        this.validation = false;
        this.functions.hideShowSettings(false);
        this.router.navigate(['Datagrid']);
      } else {
        this.validation = true;
      }
    }
  }
// to handle validations
  keyPress() {
    this.validation = false;
  }
}
