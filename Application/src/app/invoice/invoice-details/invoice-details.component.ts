import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Faktura} from "../../shared/model/Faktura";
import * as jsPDF from "jspdf";

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html'
})
export class InvoiceDetailsComponent implements OnInit {
  public faktura: Faktura = new Faktura();
  @ViewChild('to-pdf') element: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  public download() {

    const elementToPrint = document.getElementById('details');
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(elementToPrint, () => {
      pdf.save('invoice.pdf');
    });

  }
}
