import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
@Injectable({
    providedIn: 'root'
})
export class FunctionClass {

    constructor() { }
    subsVar: Subscription;
    reSubsVar: Subscription;
    settingsvar: Subscription;
    invokeFirstComponentFunction = new EventEmitter();
    callFilterFunction = new EventEmitter();
    resetFilterFunction = new EventEmitter();
    settingsEmit = new EventEmitter();
    PartnerId: any;
    kpiGroupValue: any;
    kpiSetValue: any;
    jahrValue: any;
    depotNrsValue: any;

    onFirstComponentButtonClick() {
        this.invokeFirstComponentFunction.emit();
    }

    getPartnerId() {
        return this.PartnerId;
    }

    setPartnerId(id: any) {
        this.PartnerId = id;
    }

    setFilterData(group: any, kpi: any, jahr: any, depo: any) {
        this.kpiGroupValue = group ? group : '';
        this.kpiSetValue = kpi ? kpi : '';
        this.jahrValue = jahr ? jahr : '';
        this.depotNrsValue = depo ? depo : '';
    }

    resetFilterData() {
        this.kpiGroupValue = '';
        this.kpiSetValue = '';
        this.jahrValue = '';
        this.depotNrsValue = '';
        this.resetFilterFunction.emit();
    }

    filerClick() {
        this.callFilterFunction.emit();
    }

    hideShowSettings(value: boolean) {
        this.settingsEmit.emit(value);
    }

    getFilterData() {
        const temp = {
            kpiGroupValue: this.kpiGroupValue,
            kpiSetValue: this.kpiSetValue,
            jahrValue: this.jahrValue,
            depotNrsValue: this.depotNrsValue
        };
        return temp;
    }

}
