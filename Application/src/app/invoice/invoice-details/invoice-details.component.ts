import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
import {Faktura} from "../../shared/model/Faktura";
import * as jsPDF from "jspdf";
import {UzytkownikService} from "../../shared/service/UzytkownikService";
import {ActivatedRoute, Router} from "@angular/router";
import {FakturaService} from "../../shared/service/FakturaService";
import {KlientService} from "../../shared/service/KlientService";

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html'
})
export class InvoiceDetailsComponent implements OnInit {

  @Output()
  public faktura: Faktura = new Faktura();
  @ViewChild('to-pdf') element: ElementRef;

  constructor(private route: ActivatedRoute,
              private fakturaService: FakturaService,
              private router: Router,
              public uzytkownikService: UzytkownikService,
              public klientService: KlientService) {
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.faktura = fakturaService.getFakturaFromLocal(params['id']);
      }
    });
  }

  ngOnInit() {
  }

  public download() {

    const elementToPrint = document.getElementById('details');
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(elementToPrint, () => {
      pdf.save('invoice.pdf');
    });

  }

  downloadProForma() {
    const elementToPrint = document.getElementById('details');
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(elementToPrint, () => {
      addWaterMark(pdf);
      pdf.save('invoice.pdf');
    });


    function addWaterMark(doc) {
      var totalPages = doc.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setTextColor(150);
        doc.setFontSize(30);
        doc.text(50, 100, 'Faktura Pro Forma');
      }
      return doc;
    }
  }
}
