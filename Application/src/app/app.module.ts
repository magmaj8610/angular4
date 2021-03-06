import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {InvoiceListComponent} from './invoice/invoice-list/invoice-list.component';
import {InvoiceCreateComponent} from './invoice/invoice-create/invoice-create.component';
import {InvoiceEditComponent} from './invoice/invoice-edit/invoice-edit.component';
import {StorageServiceModule} from "angular-webstorage-service";
import {FormsModule} from "@angular/forms";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserCreateComponent} from "./user/user-create/user-create.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";
import {MainMenuComponent} from './menu/main-menu/main-menu.component';
import {UtilsService} from "./shared/service/UtilsService";
import {FakturaService} from "./shared/service/FakturaService";
import {UzytkownikService} from "./shared/service/UzytkownikService";
import {KlientService} from "./shared/service/KlientService";
import {TowarService} from "./shared/service/TowarService";
import {ClientEditComponent} from "./client/client-edit/client-edit.component";
import {ClientListComponent} from "./client/client-list/client-list.component";
import {ClientCreateComponent} from "./client/client-create/client-create.component";
import {WarehouseEditComponent} from './warehouse/warehouse-edit/warehouse-edit.component';
import {WarehouseCreateComponent} from './warehouse/warehouse-create/warehouse-create.component';
import {WarehouseListComponent} from './warehouse/warehouse-list/warehouse-list.component';
import {InvoiceDetailsComponent} from './invoice/invoice-details/invoice-details.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    InvoiceCreateComponent,
    InvoiceEditComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    MainMenuComponent,
    ClientEditComponent,
    ClientListComponent,
    ClientCreateComponent,
    WarehouseEditComponent,
    WarehouseCreateComponent,
    WarehouseListComponent,
    InvoiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    FormsModule
  ],
  providers: [
    UtilsService,
    FakturaService,
    UzytkownikService,
    KlientService,
    TowarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
