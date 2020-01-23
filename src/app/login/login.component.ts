import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { DefaultServiceService } from '../services/default-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  validation:boolean= false;
  constructor(private router: Router, private defaultService : DefaultServiceService) { }

  ngOnInit() {
    this.defaultService.hideShowSettings(true);
  }

  login() {
    if (this.username && this.password) {
      if (this.username == 'admin' && this.password == 'admin') {
        this.validation = false;
        this.defaultService.hideShowSettings(false);
        this.router.navigate(['Datagrid']);
      }else{
        this.validation = true;
      }
    }
  }

  keyPress(){
    this.validation = false;
  }
}
