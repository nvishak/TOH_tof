import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filterOptions = [
    { text: 'Auswerte Datum', type: 'date' },
    { text: 'Kategorie', type: 'drop', placeHolder: 'Kategoriepicker', filters: ['Equal', 'NotEqual', 'Like', 'Starts With', 'Not NUll'] },
    { text: 'KPI Sets', type: 'drop', placeHolder: 'Setpicker', filters: ['Equal', 'NotEqual', 'Like', 'Starts With', 'Not NUll'] },
    { text: 'Partner', type: 'drop', placeHolder: 'Partnerpicker', filters: ['Equal', 'NotEqual', 'Like', 'Starts With', 'Not NUll'] },
    { text: 'Region', type: 'selection', placeHolder: 'Regionpicker', filters: ['Equal', 'NotEqualrr', 'Like', 'Startse With', 'Not NUll'] },
    { text: 'Depot', type: 'selection', placeHolder: 'Depotpicker', filters: ['Equalq', 'NotEqual', 'Likeyy', 'Starts With', 'Not NUll', 'Not NUll', 'Not NUll', 'Starts With', 'Starts With', 'Starts With', 'Starts With', 'Starts With', 'Starts With'] },
  ]
  selectedDate: any = '';
  constructor() { }

  ngOnInit() {

  }

  method(event) {
    console.log(event);
  }
  optionSelected(event, text) {
    console.log(event, text);
  }

  // ngAfterViewInit() {
  //   for (var i = 0; i < this.filterOptions.length; i++) {
  //     document.getElementsByClassName('mat-card-header-text')[i].setAttribute('style', 'margin: 0 0');
  //   }
  // }

}

