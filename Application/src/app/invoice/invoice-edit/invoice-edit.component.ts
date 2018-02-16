import {Component, Inject, OnInit} from '@angular/core';
import {Invoice} from "../Invoice";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractInvoiceComponent} from "../abstract-invoice/abstract-invoice.component";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html'
})
export class InvoiceEditComponent extends AbstractInvoiceComponent implements OnInit {

  public invoice: Invoice = new Invoice();

  constructor(private route: ActivatedRoute, @Inject(LOCAL_STORAGE) private storageChild: WebStorageService, private router: Router) {
    super(storageChild);
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.invoice = this.getInvoiceFromLocal(params['id']);
      }
    });
  }

  ngOnInit() {

  }

  public save() {
    this.saveInvoiceInLocal(this.invoice);
    this.router.navigate(['invoice']);
  }
}
