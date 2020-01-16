import { Component, OnInit, NgModule, Input } from '@angular/core';
import { DefaultServiceService } from '../default-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filterOptions: any = [
    { text: 'Auswerte Datum', type: 'date' },
    { text: 'Kategorie', type: 'drop', placeHolder: 'Kategoriepicker', filters: [] },
    { text: 'KPI Sets', type: 'drop', placeHolder: 'Setpicker', filters: [] },
    { text: 'Partner', type: 'drop', placeHolder: 'Partnerpicker', filters: ['Test 1', 'Test 2', 'Test 3', 'Test 4'] },
    { text: 'Region', type: 'selection', placeHolder: 'Regionpicker', filters: ['Test 1', 'Test 2', 'Test 3', 'Test 4'] },
    { text: 'Depot', type: 'selection', placeHolder: 'Depotpicker', filters: ['Test 1', 'Test 2', 'Test 3', 'Test 4'] },
  ]
  selectedDate: any = '';
  allPartner:any;
  constructor(private defaultService: DefaultServiceService) { }
  @Input() mainFilterData: any;

  ngOnInit() {
    // this.filterOptions[1].filters = this.mainFilterData.category;
    // this.filterOptions[2].filters = this.mainFilterData.kpiSets;
    this.defaultService.getKpigruppen().subscribe(data => {
      this.filterOptions[1].filters = data;
    });
    this.defaultService.getKpisets().subscribe(data => {
      this.filterOptions[2].filters = data;
    });
    this.defaultService.getAllDepots().subscribe((data) => {
      let temp = [];
      this.allPartner = data;
      for(var i=0; i < this.allPartner.length; i++){
        if(this.allPartner[i].partnerIdFk)
          if(temp.indexOf(this.allPartner[i].partnerIdFk) == -1)
            temp.push(this.allPartner[i].partnerIdFk);
      }

      this.filterOptions[3].filters = temp.sort(function(a,b){ return a -b });
    });

  }

  method(event) {
    console.log(event);
  }
  optionSelected(event, text) {
    console.log(event, text);
    if (text == 'Region' || text == 'Depot') {
      // if (event == 'Monat') {
      //   this.testApi(5);
      // }
      // else if (event == 'AllDepot') {
        // this.testApi(2);
      // } else if (event == 'Depot') {
        // this.testApi(6);
      // }
      // else if (event == 'Version') {
      //   this.testApi(1);
      // }
    }
    if(text == 'Partner'){
      console.log("Partner Selected",event);
      this.defaultService.setPartnerId(event);
      this.defaultService.onFirstComponentButtonClick();
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
        this.defaultService.getMonat(284).subscribe((data) => {
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




}

