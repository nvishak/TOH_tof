import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionClass } from './globals/function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tohTof';
  timer: any;
  currentTime: any;
  time: any;
  hideSettings = false;

  constructor(private router: Router, private functions: FunctionClass) {
    this.functions.settingsvar = this.functions.settingsEmit.subscribe((flag: boolean) => {
      this.hideSettings = flag;
    });
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
      this.currentTime = this.currentTime = this.time.getDate() + '/'
        + (this.time.getMonth() + 1) + '/'
        + this.time.getFullYear() + ' @ '
        + this.time.getHours() + ':'
        + this.time.getMinutes() + ':'
        + this.time.getSeconds();
    }, 1000);
  }

  logout() {
    this.functions.hideShowSettings(true);
    this.router.navigate(['']);
  }

  password() {
    this.router.navigate(['Passwordreset']);
  }
  logoClick() {
    this.router.navigate(['Datagrid']);
  }
}
