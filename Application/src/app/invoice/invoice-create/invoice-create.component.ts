import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FakturaService} from "../../shared/service/FakturaService";
import {Faktura} from "../../shared/model/Faktura";
import {UzytkownikService} from "../../shared/service/UzytkownikService";
import {KlientService} from "../../shared/service/KlientService";
import {Pozycja} from "../../shared/model/Pozycja";
import {TowarService} from "../../shared/service/TowarService";

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html'
})
export class InvoiceCreateComponent {

  public faktura: Faktura = new Faktura();

  constructor(private fakturaService: FakturaService,
              private router: Router,
              public uzytkownikService:UzytkownikService,
              public klientService:KlientService,
              public towarService:TowarService) {
    if(uzytkownikService.getUzytkownicyFromLocal() != null && uzytkownikService.getUzytkownicyFromLocal().length > 0) {
      this.faktura.sprzedawca = uzytkownikService.getUzytkownicyFromLocal()[0];
    }
    if(klientService.getKlienciFromLocal() != null && klientService.getKlienciFromLocal().length > 0){
      this.faktura.klient = klientService.getKlienciFromLocal()[0];
    }
  }

  public save() {
    console.log(this.faktura);
    this.fakturaService.saveFakturaInLocal(this.faktura);
    this.router.navigate(['lista_faktur']);
  }

  removePozycja(id: any) {
    let selectPozycja;
    for(let pozycja of this.faktura.pozycje){
      if(pozycja.id == id){
        selectPozycja = id;
      }
    }
    if(selectPozycja != null){
      this.faktura.pozycje.splice(selectPozycja,1);
    }
  }

  addPozycja() {
    let pozycja:Pozycja = new Pozycja();
    if(this.faktura.pozycje != null){
      pozycja.id = this.faktura.pozycje.length;
    }else{
      pozycja.id = 0;
      this.faktura.pozycje = new Array<Pozycja>();
    }
    this.faktura.pozycje.push(pozycja);
  }


  byId(item1,item2){
    if(item1 == null || item2 == null){
      return false;
    }else {
      return item1.id == item2.id;
    }
  }
}
