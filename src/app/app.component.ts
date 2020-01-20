import { Component } from '@angular/core';

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
}
