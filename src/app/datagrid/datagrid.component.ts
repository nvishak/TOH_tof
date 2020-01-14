import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  constructor() { }
  time = new Date();
  timer;
  currentTime;
  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
      this.currentTime = this.time.toLocaleTimeString('eu-de');
    }, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }

//Export Method
  export(){
    console.log("Export Method");
  }
}
