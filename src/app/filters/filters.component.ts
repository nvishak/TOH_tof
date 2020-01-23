import { Component, OnInit, NgModule, Input } from '@angular/core';
import { DefaultServiceService } from '../services/default-service.service';
import { FunctionClass } from './../globals/function';
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
    { text: 'Depot', type: 'selection', placeHolder: 'Depotpicker', filters: [], bind: '' },
  ];
  selectedDate: any = '';
  allPartner: any;
  selectedGroup: any;
  selectedKpi: any;
  selectedYear: any;
  selectedDepot: any;
  selectedArray: any = [];
  previousSelected: any = -1;
  validFilter = false;
  depotBind: any;
  newArray: any;
  constructor(private defaultService: DefaultServiceService, private functions: FunctionClass) { }
  @Input() mainFilterData: any;

  ngOnInit() {
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
      const temp = [];
      this.allPartner = data;
      for (var i = 0; i < this.allPartner.length; i++) {
        if (this.allPartner[i].bezeichnung){
          temp.push({bezeichnung: this.allPartner[i].bezeichnung, depotnr: this.allPartner[i].depotnr});
        }
        this.selectedArray[this.allPartner[i].depotnr] = false;
      }
      this.newArray = temp.sort((a, b) => (a.bezeichnung > b.bezeichnung) ? 1 : ((b.bezeichnung > a.bezeichnung) ? -1 : 0));
    });
  }

  method(event) {
    const tempDate = new Date(event.value);
    this.selectedDate = tempDate.getFullYear();
  }
  optionSelected(event, text: string) {
    if (text == 'Region' || text == 'Depot') {

      this.selectedDepot = event.depotnr;
      if (this.selectedArray[event.depotnr] != true) {
        this.selectedArray[this.previousSelected] = false;
        this.selectedArray[event.depotnr] = true;
        this.previousSelected = event.depotnr;
      }

    }
    if (text == 'Partner') {
      this.functions.setPartnerId(event);
      this.functions.onFirstComponentButtonClick();
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

  filterData() {
      this.functions.setFilterData(this.selectedGroup, this.selectedKpi, this.selectedDate, this.selectedDepot);
      this.functions.filerClick();
      this.closeModal();
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
    this.functions.resetFilterData();
    this.closeModal();
  }

  closeModal() {
      document.getElementById('rightNavBar').style.width = '0';
      document.getElementById('rightNavBar').style.right = '-30px';
      document.getElementById('mainBody').style.marginRight = '0';
  }


}

