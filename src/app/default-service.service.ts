import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription'; 
import { KpiGroup } from './interface/kpiGroupInterface';
import { KpiSet } from './interface/kpiSetInterface';
import { Depot } from './interface/depotInterface';
import { Monat } from './interface/monatInterface';

@Injectable({
  providedIn: 'root'
})
export class DefaultServiceService {
    
  subsVar: Subscription;
  reSubsVar: Subscription;
  exportVar: Subscription;
  invokeFirstComponentFunction = new EventEmitter();  
  callFilterFunction = new EventEmitter();  
  resetFilterFunction = new EventEmitter();  
  updateExportButton = new EventEmitter();
  PartnerId: any;
  kpiGroupValue:any;
  kpiSetValue:any;
  jahrValue:any;
  depotNrsValue:any;
  constructor(private http: HttpClient) { }

  getVersion(){
    return this.http.get("http://10.221.144.44:8080/tofKpiRS/version");
  }

  getAllDepots(){
    return this.http.get<Depot>("http://10.221.144.44:8080/tofKpiRS/stammdaten/depots");
  }

  getKpigruppen(){
    return this.http.get<KpiGroup>("http://10.221.144.44:8080/tofKpiRS/stammdaten/kpigruppen");
  }
  getKpisets(){
    return this.http.get<KpiSet>("http://10.221.144.44:8080/tofKpiRS/stammdaten/kpisets");
  }
  getMonat(id, firstTime){
    if(!firstTime){
        let paramsMap = new Map<any,any>();
        paramsMap.set('kpiGruppen',this.kpiGroupValue);
        paramsMap.set('kpiSet',this.kpiSetValue);        
        paramsMap.set('depotNrs',this.depotNrsValue);        
        paramsMap.set('jahr',this.jahrValue);
  
      let params = new HttpParams();
      paramsMap.forEach((value: any, key: any) => {
        if(value)
          params = params.set(key, value);
      });
    return this.http.get<Monat>("http://10.221.144.44:8080/tofKpiRS/kpis/depot/monat/" + id, {params: params});
    }else
    {
        return this.http.get<Monat>("http://10.221.144.44:8080/tofKpiRS/kpis/depot/monat/" + id);
    }
  }

  getDepot(id){
    return this.http.get<Depot>("http://10.221.144.44:8080/tofKpiRS/stammdaten/depots/" + id);
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

  setFilterData(group,kpi, jahr, depo){
    this.kpiGroupValue = group ? group : '';
    this.kpiSetValue = kpi ? kpi : '';
    this.jahrValue = jahr ? jahr : '';
    this.depotNrsValue = depo ? depo : '';
  }

  resetFilterData(){
    this.kpiGroupValue = '';
    this.kpiSetValue = '';
    this.jahrValue = '';
    this.depotNrsValue = '';
    this.resetFilterFunction.emit();
  }

  filerClick() {    
    this.callFilterFunction.emit();
  } 

}
