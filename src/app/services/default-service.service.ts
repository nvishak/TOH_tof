import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { KpiGroup } from '../interface/kpiGroupInterface';
import { KpiSet } from '../interface/kpiSetInterface';
import { Depot } from '../interface/depotInterface';
import { Monat } from '../interface/monatInterface';
import { FunctionClass } from '../globals/function';

@Injectable({
  providedIn: 'root'
})
export class DefaultServiceService {

  constructor(private http: HttpClient, private functions: FunctionClass) { }

  getVersion() {
    return this.http.get('http://10.221.144.44:8080/tofKpiRS/version');
  }

  getAllDepots() {
    return this.http.get<Depot>('http://10.221.144.44:8080/tofKpiRS/stammdaten/depots');
  }

  getKpigruppen() {
    return this.http.get<KpiGroup>('http://10.221.144.44:8080/tofKpiRS/stammdaten/kpigruppen');
  }
  getKpisets() {
    return this.http.get<KpiSet>('http://10.221.144.44:8080/tofKpiRS/stammdaten/kpisets');
  }
  getMonat(id, firstTime) {
    if (!firstTime) {
      const temp = this.functions.getFilterData();
      const paramsMap = new Map<any, any>();
      paramsMap.set('kpiGruppen', temp.kpiGroupValue);
      paramsMap.set('kpiSet', temp.kpiSetValue);
      paramsMap.set('depotNrs', temp.depotNrsValue);
      paramsMap.set('jahr', temp.jahrValue);

      let parameters = new HttpParams();
      paramsMap.forEach((value: any, key: any) => {
        if (value) {
          parameters = parameters.set(key, value);
        }
      });
      return this.http.get<Monat>('http://10.221.144.44:8080/tofKpiRS/kpis/depot/monat/' + id, { params: parameters });
    } else {
      return this.http.get<Monat>('http://10.221.144.44:8080/tofKpiRS/kpis/depot/monat/' + id);
    }
  }

  getDepot(id) {
    return this.http.get<Depot>('http://10.221.144.44:8080/tofKpiRS/stammdaten/depots/' + id);
  }
}
