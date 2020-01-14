import { Component, OnInit, NgModule } from '@angular/core';
import { DefaultServiceService } from '../default-service.service';
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
  constructor(private service: DefaultServiceService) { }

  ngOnInit() {
  }

  method(event) {
    console.log(event);
  }
  optionSelected(event, text) {
    console.log(event, text);
  }

  testApi(value) {
    switch (value) {
      case 1:
        this.service.getVersion().subscribe((data) => {
          console.log(data);
        });
        break;
      case 2:
        this.service.getAllDepots().subscribe((data) => {
          console.log(data);
        });
        break;
      case 3:
        this.service.getKpigruppen().subscribe((data) => {
          console.log(data);
        });
        break;
      case 4:
        this.service.getKpisets().subscribe((data) => {
          console.log(data);
        });
        break;
      case 5:
        this.service.getMonat(41).subscribe((data) => {
          console.log(data);
        });
        break;
      case 6:
        this.service.getDepot(41).subscribe((data) => {
          console.log(data);
        });
        break;
    }

  }
}
