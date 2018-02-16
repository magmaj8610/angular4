import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {InvoiceListComponent} from './invoice/invoice-list/invoice-list.component';
import {InvoiceCreateComponent} from './invoice/invoice-create/invoice-create.component';
import {InvoiceEditComponent} from './invoice/invoice-edit/invoice-edit.component';
import {StorageServiceModule} from "angular-webstorage-service";
import {FormsModule} from "@angular/forms";
import {AbstractInvoiceComponent} from "./invoice/abstract-invoice/abstract-invoice.component";


@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    InvoiceCreateComponent,
    InvoiceEditComponent,
    AbstractInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
