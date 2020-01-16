import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription'; 
@Injectable({
  providedIn: 'root'
})
export class DefaultServiceService {
  subsVar: Subscription;
  invokeFirstComponentFunction = new EventEmitter();  
  PartnerId: any; 
  constructor(private http: HttpClient) { }

  getVersion(){
    return this.http.get("http://10.221.144.44:8080/tofKpiRS/version");
  }

  getAllDepots(){
    return this.http.get("http://10.221.144.44:8080/tofKpiRS/stammdaten/depots");
  }

  getKpigruppen(){
    return this.http.get("http://10.221.144.44:8080/tofKpiRS/stammdaten/kpigruppen");
  }
  getKpisets(){
    return this.http.get("http://10.221.144.44:8080/tofKpiRS/stammdaten/kpisets");
  }
  getMonat(id){
    return this.http.get("http://10.221.144.44:8080/tofKpiRS/kpis/depot/monat/" + id);
  }

  getDepot(id){
    return this.http.get("http://10.221.144.44:8080/tofKpiRS/stammdaten/depots/" + id);
  }

  onFirstComponentButtonClick() {    
    this.invokeFirstComponentFunction.emit();    
  } 

  getPartnerId(){
    return this.PartnerId;
  }

  setPartnerId(id){
    this.PartnerId = id;
  }

}
