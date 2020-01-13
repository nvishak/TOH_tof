import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filterOptions = [
    {text: 'Auswerte Datum', type: 'date'},
    {text: 'Kategorie', type: 'text', placeHolder:'Kategoriepicker' ,filters:['Equal','NotEqual', 'Like','Starts With', 'Not NUll']},
    {text: 'KPI Sets', type: 'text' ,placeHolder:'Setpicker', filters:['Equal','NotEqual', 'Like','Starts With', 'Not NUll']},
    {text: 'Partner', type: 'text' ,placeHolder:'Partnerpicker', filters:['Equal','NotEqual', 'Like','Starts With', 'Not NUll']},
    {text: 'Region', type: 'text' ,placeHolder:'Regionpicker', filters:['Equal','NotEqual', 'Like','Starts With', 'Not NUll']},
    {text: 'Depot', type: 'text', placeHolder:'Depotpicker', filters:['Equal','NotEqual', 'Like','Starts With', 'Not NUll']},
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
