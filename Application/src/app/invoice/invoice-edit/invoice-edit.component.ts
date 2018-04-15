import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Invoice} from "../Invoice";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractInvoiceComponent} from "../abstract-invoice/abstract-invoice.component";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";
import * as jsPDF from "jspdf";


@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html'
})
export class InvoiceEditComponent extends AbstractInvoiceComponent  {

  public invoice: Invoice = new Invoice();
  @ViewChild('to-pdf') element: ElementRef;

  constructor(private route: ActivatedRoute, @Inject(LOCAL_STORAGE) private storageChild: WebStorageService, private router: Router) {
    super(storageChild);
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.invoice = this.getInvoiceFromLocal(params['id']);
      }
    });
  }

  public save() {
    this.saveInvoiceInLocal(this.invoice);
    this.router.navigate(['invoice']);
  }
  public download(){

    const elementToPrint = document.getElementById('details');
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(elementToPrint, () => {
      pdf.save('invoice.pdf');
    });

  }

}
