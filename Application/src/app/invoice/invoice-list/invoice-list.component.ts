import {Component} from '@angular/core';
import {FakturaService} from "../../shared/service/FakturaService";
import {Faktura} from "../../shared/model/Faktura";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html'
})
export class InvoiceListComponent{

  public faktury: Array<Faktura> = new Array<Faktura>();

  constructor(private fakturaService: FakturaService,) {
    this.faktury = fakturaService.getFakturyFromLocal();
  }
  public delete(fakturaId:number){
    this.fakturaService.deleteFakturaInLocal(fakturaId);
    this.faktury = this.fakturaService.getFakturyFromLocal();
  }
  public clone(faktura:Faktura){
    this.faktury.push(faktura);
  }
}
