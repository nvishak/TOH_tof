import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DefaultServiceService } from '../services/default-service.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  constructor(private defaultService: DefaultServiceService) { }

  time = new Date();
  timer;
  currentTime;
  version: any = {
    value: ''
  };

  filterActive: boolean = false;
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



  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
