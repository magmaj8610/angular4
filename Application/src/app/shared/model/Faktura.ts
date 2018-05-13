import {Pozycja} from "./Pozycja";
import {Uzytkownik} from "./Uzytkownik";
import {Klient} from "./Klient";

export class Faktura {
  id: number;
  dataWystawienia: Date;
  dataPlatnosci: Date;
  formaPlatnosci: string;
  sprzedawca: Uzytkownik;
  klient: Klient;
  nrFaktury: number;
  pozycje: Array<Pozycja>;
  uwagi: string;
  korekta: boolean;
  proForma: boolean;
}
