import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DefaultServiceService {

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
}
