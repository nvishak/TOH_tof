import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatagridComponent } from './datagrid/datagrid.component';
import { LoginComponent } from "./login/login.component";
import { PasswordResetComponent } from "./password-reset/password-reset.component";



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Datagrid', component: DatagridComponent },
  { path: 'Passwordreset', component: PasswordResetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
