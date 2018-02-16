import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { InvoiceCreateComponent } from './invoice/invoice-create/invoice-create.component';
import { InvoiceEditComponent } from './invoice/invoice-edit/invoice-edit.component';
import {StorageServiceModule} from "angular-webstorage-service";


@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    InvoiceCreateComponent,
    InvoiceEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
