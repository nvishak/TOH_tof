import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datagrid-table',
  templateUrl: './datagrid-table.component.html',
  styleUrls: ['./datagrid-table.component.css']
})
export class DatagridTableComponent implements OnInit {
  table = {
    tableHeaders :['Name','January','February','March','April','May', 'June','July','August','September','October','November','December','Q1', 'Q2', 'Q3', 'Q4', 'Best', 'Ziel'],
    tableRows: [
      ['Personalkosten','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856'],
      ['...','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856','102856','102856','102856','102856','4102856']
    ]
  }
  
  constructor() { }

  ngOnInit() {

    

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
