import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DefaultServiceService } from '../default-service.service';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  constructor(private defaultService: DefaultServiceService) { 
    this.defaultService.exportVar = this.defaultService.updateExportButton.subscribe((value: boolean) => {
      this.disableExport = value;
    });
  }
  time = new Date();
  timer;
  currentTime;
  mainFilterObject: any = {
    category: [],
    kpiSets: []
  };
  version: any = {
    value: ''
  };
  disableExport: boolean = false;
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
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'tableExport.xlsx');
  }
}
