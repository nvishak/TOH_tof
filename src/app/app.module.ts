import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { DatagridTableComponent } from './datagrid-table/datagrid-table.component';
import { FiltersComponent } from './filters/filters.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownSearchComponent } from './dropdown-search/dropdown-search.component';
 

@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    DatagridTableComponent,
    FiltersComponent,
    LoginComponent,
    DatepickerComponent,
    DropdownSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
