import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { DefaultServiceService } from '../services/default-service.service';
import * as xlsx from 'xlsx';
import { FunctionClass } from '../globals/function';

@Component({
  selector: 'app-datagrid-table',
  templateUrl: './datagrid-table.component.html',
  styleUrls: ['./datagrid-table.component.css']
})
export class DatagridTableComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  table = {
    tableHeaders :['Name', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December', 'Q1', 'Q2', 'Q3', 'Q4', 'Best', 'Ziel'],
    tableRows: []
  }

  disableExport: boolean = false;
  constructor(private defaultService: DefaultServiceService, private functions: FunctionClass) {
    this.functions.subsVar = this.functions.callFilterFunction.subscribe((name: string) => {
      this.getTableData(284, null);
    });

    this.functions.reSubsVar = this.functions.resetFilterFunction.subscribe((name: string) => {
      this.getTableData(284, true);
    });
  }
  data: any;
  newFlag: any = false;
  noDataValue: any = 'No Data Available';
  version: any = {
    value: ''
  };
  pages = [1];
  ngOnInit() {
    this.getTableData(284, true);

    this.defaultService.getVersion().subscribe(data => {
      this.version = data;
    });
  }

  getTableData(partnerId, firstTime){
    document.documentElement.setAttribute('style','cursor:wait; pointer-events:none');
    this.defaultService.getMonat(partnerId, firstTime).subscribe(response =>{
    this.table.tableRows = [];
    this.data = response;
    let row = [];
    if (!this.data.value) {
      this.data.forEach(element => {
        row.push({partnerId: element.partner_id_fk, kpiGruppeId: element.kpiGruppeId, depotnr: element.depotnr, kpiTypId: element.kpiTypId ,
          rows:[element.kpiGruppeBezeichnung, element.wertJanuar, element.wertFebruar, element.wertMaerz,
            element.wertApril, element.wertMai, element.wertJuni, element.wertJuli, element.wertAugust,
            element.wertSeptember, element.wertOktober, element.wertNovember, element.wertDezember, element.wertQ1,
            element.wertQ2, element.wertQ3, element.wertQ4, element.wertMonatBest, element.wertMonatZiel ] });
      });
    } else {
      this.noDataValue = this.data.value;
    }
      document.documentElement.setAttribute('style','cursor:auto; pointer-events:auto');
    this.table.tableRows = row;
    this.newFlag = this.table.tableRows.length ? false : true;
    },
    error =>{
      this.newFlag = this.table.tableRows.length ? false : true;
      setTimeout(function(){
        document.documentElement.setAttribute('style','cursor:auto; pointer-events:auto');
      }, 2000);
    });
  }
  // Method for Expand all
  expandAll(){
    // to be added for tree view
  }

   // Method for collapse all
   collapseAll() {
    // to be added for tree view
  }

   // Method for columnWidth
   columnWidth() {
    // to be added for dynamic Column width
  }

  export() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'exportCSV.xlsx');
  }

  openFilters() {
    document.getElementById('rightNavBar').style.width = '16%';
    document.getElementById('rightNavBar').style.right = '0';
    document.getElementById('mainBody').style.marginRight = '15%';
  }
}
