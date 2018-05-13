import {Pozycja} from "./Pozycja";

export class Faktura {
  id:number;
  dataWystawienia:Date;
  dataPlatnosci:Date;
  formaPlatnosci:string;
  sprzedawca:string;
  klient:string;
  nrFaktury:number;
  pozycje: Pozycja[];
  uwagi:string;
  korekta:boolean;
  proForma:boolean;
}
