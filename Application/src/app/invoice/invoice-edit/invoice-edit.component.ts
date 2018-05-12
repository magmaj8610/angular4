import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import * as jsPDF from "jspdf";
import {Faktura} from "../../shared/model/Faktura";
import {FakturaService} from "../../shared/service/FakturaService";


@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html'
})
export class InvoiceEditComponent {

  public faktura: Faktura = new Faktura();
  @ViewChild('to-pdf') element: ElementRef;

  constructor(private route: ActivatedRoute, private fakturaService: FakturaService, private router: Router) {
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

  public download() {

    const elementToPrint = document.getElementById('details');
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(elementToPrint, () => {
      pdf.save('invoice.pdf');
    });

  }

}
