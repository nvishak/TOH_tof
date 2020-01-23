export interface Depot{
      depotId: number;
      adresseIdFk: number;
      bezeichnung: string;
      bldKommunikation: string;
      code: string;
      depotnr: number;
      distributionAdresseIdFk: number;
      gueltigVon: object;
      gueltigBis: object;
      insdate: object;
      insprgm: string;
      insuser: string;
      insversion: string;
      kennzeichenmaske: string;
      mandantIdFk: number;
      partnerIdFk: number;
      satzstatus: string;
      spracheIdFk: number;
      upddate: object;
      updprgm: string;
      upduser: string;
      updversion: string;
      depot: object;
}