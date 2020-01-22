import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatagridComponent} from './datagrid/datagrid.component';
import { LoginComponent } from "./login/login.component";
import{ DashboardComponent} from "./dashboard/dashboard.component";




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Datagrid', component: DatagridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
