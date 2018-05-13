import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FakturaService} from "../../shared/service/FakturaService";
import {Faktura} from "../../shared/model/Faktura";
import {UzytkownikService} from "../../shared/service/UzytkownikService";
import {KlientService} from "../../shared/service/KlientService";
import {Pozycja} from "../../shared/model/Pozycja";

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html'
})
export class InvoiceCreateComponent {

  public faktura: Faktura = new Faktura();

  constructor(private fakturaService: FakturaService,
              private router: Router,
              public uzytkownikService:UzytkownikService,
              public klientService:KlientService) {
  }

  public save() {
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
}
