import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FakturaService} from "../../shared/service/FakturaService";
import {Faktura} from "../../shared/model/Faktura";
import {UzytkownikService} from "../../shared/service/UzytkownikService";
import {KlientService} from "../../shared/service/KlientService";
import {Pozycja} from "../../shared/model/Pozycja";


@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html'
})
export class InvoiceEditComponent {
  public faktura: Faktura = new Faktura();

  constructor(private route: ActivatedRoute,
              private fakturaService: FakturaService,
              private router: Router,
              public uzytkownikService:UzytkownikService,
              public klientService:KlientService) {
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.faktura = fakturaService.getFakturaFromLocal(params['id']);
      }
    });
  }

  public save() {
    this.fakturaService.saveFakturaInLocal(this.faktura);
    this.router.navigate(['lista_faktur']);
  }


  removePozycja(id: any) {
      for(let pozycja of this.faktura.pozycje){
        if(pozycja.id = id){
            this.faktura.pozycje.splice(pozycja.id,1);
        }
      }
  }

  addPozycja() {
      let pozycja:Pozycja = new Pozycja();
      if(this.faktura.pozycje != null){
        pozycja.id = this.faktura.pozycje.length;
      }else{
        pozycja.id = 0;
      }
      this.faktura.pozycje.push(pozycja);
  }
}
