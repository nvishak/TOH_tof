export interface KpiSet {
      kpiSetId: number;
      bezeichnung: string;
      beschreibung: string;
      code: string;
      gueltigVon: object;
      gueltigBis: object;
      insdate: object;
      insprgm: string;
      insuser: string;
      insversion: string;
      kennzeichenmaske: string;
      satzstatus: string;
      sortierPosition: number;
      upddate: object;
      updprgm: string;
      upduser: string;
      updversion: string;
      kpiTypen: object;
      dwKpisetId: number;
      tagesimportoffset: number;
      kpiGruppeTyp: object;
}