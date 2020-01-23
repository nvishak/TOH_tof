import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @Output() selectedDate = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  method(event){
    // console.log(event);
    this.selectedDate.emit(event);
  }

  addEvent(type, event){
    this.selectedDate.emit(event);
  }
}
