import {Component, Inject, OnInit} from '@angular/core';
import {Invoice} from "../Invoice";
import {AbstractInvoiceComponent} from "../abstract-invoice/abstract-invoice.component";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html'
})
export class InvoiceCreateComponent extends AbstractInvoiceComponent implements OnInit{

  public invoice:Invoice = new Invoice();

  constructor(@Inject(LOCAL_STORAGE) private storageChild: WebStorageService) {
    super(storageChild);
  }

  ngOnInit() {
  }

  public save(){
    this.saveInvoiceInLocal(this.invoice);
  }


}
