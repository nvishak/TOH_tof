import { Component, OnInit } from '@angular/core';
import { DefaultServiceService } from '../default-service.service';
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
  mainFilterObject: any = {
    category: [],
    kpiSets: []
  };
  version: any = {
    value:''
  };

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
      this.currentTime = this.time.toLocaleTimeString('eu-de');
    }, 1000);

    // this.defaultService.getKpigruppen().subscribe(data =>{
    //   this.mainFilterObject.category = data;
    // });    
    // this.defaultService.getKpisets().subscribe(data =>{
    //   this.mainFilterObject.kpiSets = data;
    // });

    this.defaultService.getVersion().subscribe(data => {       
      this.version = data;
    });

  }

  

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  //Export Method
  export() {
    console.log("Export Method");
  }
}
