import {Component, Inject, OnInit} from '@angular/core';
import {Invoice} from "../Invoice";
import {AbstractInvoiceComponent} from "../abstract-invoice/abstract-invoice.component";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html'
})
export class InvoiceListComponent extends AbstractInvoiceComponent implements OnInit {

  public invoices: Array<Invoice> = new Array<Invoice>();

  constructor(@Inject(LOCAL_STORAGE) private storageChild: WebStorageService) {
    super(storageChild);
    this.invoices = this.getInvoicesFromLocal();
  }

  ngOnInit() {
  }
}
