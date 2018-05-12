import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FakturaService} from "../../shared/service/FakturaService";
import {Faktura} from "../../shared/model/Faktura";

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html'
})
export class InvoiceCreateComponent {

  public faktura: Faktura = new Faktura();

  constructor(private fakturaService: FakturaService, private router: Router) {
  }

  public save() {
    this.fakturaService.saveFakturaInLocal(this.faktura);
    this.router.navigate(['lista_faktur']);
  }

}
