import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DefaultServiceService } from '../services/default-service.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  username: any;
  password: any;
  validation: boolean = false;
  constructor(private router: Router, private defaultService: DefaultServiceService) { }
  ngOnInit() {
  }

  login() {
    this.router.navigate(['Datagrid']);
  }

  keyPress() {
    this.validation = false;
  }

}
