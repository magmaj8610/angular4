import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvoiceListComponent} from "./invoice/invoice-list/invoice-list.component";
import {InvoiceCreateComponent} from "./invoice/invoice-create/invoice-create.component";
import {InvoiceEditComponent} from "./invoice/invoice-edit/invoice-edit.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserCreateComponent} from "./user/user-create/user-create.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";
import {ClientListComponent} from "./client/client-list/client-list.component";
import {ClientCreateComponent} from "./client/client-create/client-create.component";
import {ClientEditComponent} from "./client/client-edit/client-edit.component";
import {WarehouseCreateComponent} from "./warehouse/warehouse-create/warehouse-create.component";
import {WarehouseListComponent} from "./warehouse/warehouse-list/warehouse-list.component";
import {WarehouseEditComponent} from "./warehouse/warehouse-edit/warehouse-edit.component";
import {InvoiceDetailsComponent} from "./invoice/invoice-details/invoice-details.component";

const routes: Routes = [
  {path: 'lista_faktur', component: InvoiceListComponent},
  {path: 'lista_faktur/stworz', component: InvoiceCreateComponent},
  {path: 'lista_faktur/edycja/:id', component: InvoiceEditComponent},
  {path: 'szczegoly_faktury', component: InvoiceDetailsComponent},

  {path: 'lista_uzytkownikow', component: UserListComponent},
  {path: 'lista_uzytkownikow/stworz', component: UserCreateComponent},
  {path: 'lista_uzytkownikow/edycja/:id', component: UserEditComponent},

  {path: 'lista_klientow', component: ClientListComponent},
  {path: 'lista_klientow/stworz', component: ClientCreateComponent},
  {path: 'lista_klientow/edycja/:id', component: ClientEditComponent},

  {path: 'lista_towarow', component: WarehouseListComponent},
  {path: 'lista_towarow/stworz', component: WarehouseCreateComponent},
  {path: 'lista_towarow/edycja/:id', component: WarehouseEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
