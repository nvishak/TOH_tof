import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrls: ['./dropdown-search.component.css']
})
export class DropdownSearchComponent implements OnInit {

  constructor() { }
  @Input() data: any;
  @Input() bind: any;
  @Output() selectedOption = new EventEmitter<object>();
  binding: any;
  ngOnInit() {
  }

  selectOption(value) {
    let temp;
    if(this.data.text == 'Kategorie' || this.data.text == 'KPI Sets') {
      temp = value.bezeichnung;
    } else {
      temp = value;
    }
    this.binding = temp;
    this.selectedOption.emit(value);
  }
  myMethod(event) {
    if(this.bind == '') {
      this.selectedOption.emit();
    }
  }

}
