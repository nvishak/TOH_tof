import { Component, OnInit, NgModule, Input } from '@angular/core';
import { DefaultServiceService } from '../default-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filterOptions: any = [
    { text: 'Auswerte Datum', type: 'date', bind: '' },
    { text: 'Kategorie', type: 'drop', placeHolder: 'Kategoriepicker', filters: [], bind: '' },
    { text: 'KPI Sets', type: 'drop', placeHolder: 'Setpicker', filters: [], bind: '' },
    // { text: 'Partner', type: 'drop', placeHolder: 'Partnerpicker', filters: ['Test 1', 'Test 2', 'Test 3', 'Test 4'] },
    // { text: 'Region', type: 'selection', placeHolder: 'Regionpicker', filters: ['Test 1', 'Test 2', 'Test 3', 'Test 4'] },
    { text: 'Depot', type: 'selection', placeHolder: 'Depotpicker', filters: [], bind: '' },
  ]
  selectedDate: any = '';
  allPartner: any;
  selectedGroup: any;
  selectedKpi: any;
  selectedYear: any;
  selectedDepot: any;
  selectedArray: any = [];
  previousSelected: any = -1;
  validFilter: boolean= false;
  depotBind: any;
  newArray: any;
  constructor(private defaultService: DefaultServiceService) { }
  @Input() mainFilterData: any;

  ngOnInit() {
    // this.filterOptions[1].filters = this.mainFilterData.category;
    // this.filterOptions[2].filters = this.mainFilterData.kpiSets;
    this.getfilterValues();

  }

  getfilterValues() {
    this.defaultService.getKpigruppen().subscribe(data => {
      this.filterOptions[1].filters = data;
    });
    this.defaultService.getKpisets().subscribe(data => {
      this.filterOptions[2].filters = data;
    });
    this.defaultService.getAllDepots().subscribe((data) => {
      let temp = [];
      this.allPartner = data;
      for (var i = 0; i < this.allPartner.length; i++) {
        if (this.allPartner[i].bezeichnung)
          temp.push({bezeichnung: this.allPartner[i].bezeichnung, depotnr:this.allPartner[i].depotnr});
        this.selectedArray[this.allPartner[i].depotnr] = false;
      }
      // this.filterOptions[3].filters = temp.sort();
      this.newArray = temp.sort((a,b) => (a.bezeichnung > b.bezeichnung) ? 1 : ((b.bezeichnung > a.bezeichnung) ? -1 : 0));
    });
  }

  method(event) {
    console.log(event);
    // this.selectedYear = Date.format(event.value);
  }
  optionSelected(event, text, index) {
    console.log(event, text);
    if (text == 'Region' || text == 'Depot') {

      // let temp = this.allPartner.filter(ele => {
      //   if (ele.bezeichnung == event)
      //     return ele;
      // })
      this.selectedDepot = event.depotnr;
      if (this.selectedArray[event.depotnr] != true) {
        this.selectedArray[this.previousSelected] = false;
        this.selectedArray[event.depotnr] = true;
        this.previousSelected = event.depotnr;
      }

    }
    if (text == 'Partner') {
      console.log("Partner Selected", event);
      this.defaultService.setPartnerId(event);
      this.defaultService.onFirstComponentButtonClick();
    }
    if (text == 'Kategorie') {
      this.selectedGroup = event && event.code ? event.code : '';
      this.filterOptions[1].bind = event && event.bezeichnung ? event.bezeichnung : '';
    }
    if (text == 'KPI Sets') {
      this.selectedKpi = event && event.code ? event.code : '';
      this.filterOptions[2].bind = event && event.bezeichnung ? event.bezeichnung : '';
    }

  }



  testApi(value) {
    switch (value) {
      case 1:
        this.defaultService.getVersion().subscribe((data) => {
          // console.log(data);
        });
        break;
      case 2:
        this.defaultService.getAllDepots().subscribe((data) => {
          // console.log(data);
        });
        break;
      case 3:
        this.defaultService.getKpigruppen().subscribe((data) => {
          // console.log(data);
        });
        break;
      case 4:
        this.defaultService.getKpisets().subscribe((data) => {
          // console.log(data);
        });
        break;
      case 5:
        this.defaultService.getMonat(284, null).subscribe((data) => {
          // console.log(data);
        });
        break;
      case 6:
        this.defaultService.getDepot(41).subscribe((data) => {
          // console.log(data);
        });
        break;
    }

  }

  filterData() {
    
      this.defaultService.setFilterData(this.selectedGroup, this.selectedKpi, 0, this.selectedDepot);
      this.defaultService.filerClick();
  }

  resetFilterData() {
    this.filterOptions[0].bind = '';
    this.filterOptions[1].bind = '';
    this.filterOptions[2].bind = '';
    this.selectedDepot = '';
    this.selectedGroup = '';
    this.selectedKpi = '';
    this.selectedArray[this.previousSelected] = false;
    this.previousSelected = -1;
    this.defaultService.resetFilterData();
  }



}

