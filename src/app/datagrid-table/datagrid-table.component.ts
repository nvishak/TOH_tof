import { Component, OnInit } from '@angular/core';
import { DefaultServiceService } from '../default-service.service';

@Component({
  selector: 'app-datagrid-table',
  templateUrl: './datagrid-table.component.html',
  styleUrls: ['./datagrid-table.component.css']
})
export class DatagridTableComponent implements OnInit {
  table = {
    tableHeaders :['Name','January','February','March','April','May', 'June','July','August','September','October','November','December','Q1', 'Q2', 'Q3', 'Q4', 'Best', 'Ziel'],
    tableRows: [
      // ['Personalkosten','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856'],
      // ['...','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856'],
      // ['Personalkosten','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856'],
      // ['...','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856']
    ]
  }
  
  constructor(private defaultService: DefaultServiceService) { 
    this.defaultService.subsVar = this.defaultService.invokeFirstComponentFunction.subscribe((name: string) => {
      let id = this.defaultService.getPartnerId();
      this.getTableData(id);
    });

  }
  data: any;
  newFlag  : any = false;
  ngOnInit() {

    this.getTableData(284);
  }

  getTableData(partnerId){
    document.documentElement.setAttribute('style','cursor:wait');
    this.table.tableRows = [];
    this.defaultService.getMonat(partnerId).subscribe(response =>{
      this.data = response;
      let row = [];
      if(!this.data.value){
      this.data.forEach(element => {
        row.push({partnerId: element.partner_id_fk, kpiGruppeId: element.kpiGruppeId, depotnr:element.depotnr,kpiTypId: element.kpiTypId ,rows:[element.kpiGruppeBezeichnung,element.wertJanuar,element.wertFebruar,element.wertMaerz,element.wertApril,element.wertMai,element.wertJuni,element.wertJuli,element.wertAugust,element.wertSeptember,element.wertOktober,element.wertNovember,element.wertDezember,element.wertQ1,element.wertQ2,element.wertQ3,element.wertQ4, element.wertMonatBest, element.wertMonatZiel ] });
      });
    }
      document.documentElement.setAttribute('style','cursor:auto');
      this.table.tableRows = row;
      this.newFlag = this.table.tableRows.length ? false : true;
    });
    setTimeout(function(){
      document.documentElement.setAttribute('style','cursor:auto');
    },2000);
  }
  //Method for Expand all
  expandAll(){
    console.log("Call Expand All Apis");
  }

   //Method for collapse all
   collapseAll(){
    console.log("Call collapse All Apis");
  }

   //Method for columnWidth
   columnWidth(){
    console.log("Call columnWidth Apis");
  }
}
