import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { DatagridTableComponent } from './datagrid-table/datagrid-table.component';
import { FiltersComponent } from './filters/filters.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './shared/datepicker/datepicker.component';
import { DropdownSearchComponent } from './shared/dropdown-search/dropdown-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    DatagridTableComponent,
    FiltersComponent,
    LoginComponent,
    DatepickerComponent,
    DropdownSearchComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    Ng2SearchPipeModule,


  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
