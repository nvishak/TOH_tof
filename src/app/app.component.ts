import { Component } from '@angular/core';
import { DefaultServiceService } from './default-service.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tohTof';
  timer: any;
  currentTime:any;
  time:any;
  hideSettings:boolean = false;

  constructor(private defaultService: DefaultServiceService, private router:Router){
    this.defaultService.settingsvar = this.defaultService.settingsEmit.subscribe((flag: boolean) => {
      this.hideSettings = flag;
    });
  }

  ngOnInit(){
    this.timer = setInterval(() => {
      this.time = new Date();
      this.currentTime = this.currentTime = this.time.getDate() + "/"
      + (this.time.getMonth()+1)  + "/" 
      + this.time.getFullYear() + " @ "  
      + this.time.getHours() + ":"  
      + this.time.getMinutes() + ":" 
      + this.time.getSeconds();
    }, 1000);
  }

  logout(){
    this.defaultService.hideShowSettings(true);    
    this.router.navigate(['']);
  }

  password(){
    this.router.navigate(['Passwordreset']);
  }
  logoClick(){
    this.router.navigate(['Datagrid']);
  }
}
