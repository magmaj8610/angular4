import {Component, Inject, OnInit} from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";
import {Invoice} from "../Invoice";

@Component({
  selector: 'app-abstract-invoice',
  templateUrl: './abstract-invoice.component.html'
})
export class AbstractInvoiceComponent implements OnInit {


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }

  ngOnInit() {
  }


  protected  getInvoiceFromLocal(key: number): Invoice {
    let invoices: Array<Invoice> = this.storage.get("invoices");
    let i = 0;
    for (let invoice of invoices) {
      if (key == invoice.id) {
        return invoice;
      }
      i++;
    }
    return new Invoice();
  }

  protected  getInvoicesFromLocal(): Array<Invoice> {
    let invoices: Array<Invoice> = this.storage.get("invoices");
    if (invoices == null) {
      invoices = new Array<Invoice>();
    }
    return invoices;
  }

  protected  saveInvoiceInLocal(invoice: Invoice): void {
    let invoices: Array<Invoice> = this.storage.get("invoices");
    if (invoices == null) {
      invoices = new Array<Invoice>();
    }
    let i = 0;
    let find = false;
    for (let invoiceTemp of invoices) {
      if (invoice.id == invoiceTemp.id) {
        invoices[i] = invoice;
        find = true;
      }
      i++;
    }
    if (!find) {
      invoices[i] = invoice;
    }
    this.storage.set("invoices", invoices);
  }

}
