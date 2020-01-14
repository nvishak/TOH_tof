import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrls: ['./dropdown-search.component.css']
})
export class DropdownSearchComponent implements OnInit {

  constructor() { }
  @Input() data : any;
  @Output() selectedOption = new EventEmitter<object>();
  binding : any;
  ngOnInit() {
  }

  selectOption(value){
    this.binding = value;
    this.selectedOption.emit(this.binding);
  }
}
