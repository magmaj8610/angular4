import {Towar} from "./Towar";

export class Pozycja {
  id: number;
  nazwa: Towar;
  jednostkaMiary: number;
  ilosc: number;
  ceneNetto: number;
  wartoscVat: number;
  wartoscBrutto: number;
}
