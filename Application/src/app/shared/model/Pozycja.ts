import {Towar} from "./Towar";

export class Pozycja {
  id:number;
  nazwa:Towar;
  jednostkaMiary:string;
  ilosc:number;
  ceneNetto:number;
  wartoscVat:number;
  wartoscBrutto:number;
}
