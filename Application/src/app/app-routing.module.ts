import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvoiceListComponent} from "./invoice/invoice-list/invoice-list.component";
import {InvoiceCreateComponent} from "./invoice/invoice-create/invoice-create.component";
import {InvoiceEditComponent} from "./invoice/invoice-edit/invoice-edit.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserCreateComponent} from "./user/user-create/user-create.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";

const routes: Routes = [
  {path: 'lista_faktur', component: InvoiceListComponent},
  {path: 'lista_faktur/stworz', component: InvoiceCreateComponent},
  {path: 'lista_faktur/edycja/:id', component: InvoiceEditComponent},
  {path: 'lista_uzytkownikow', component: UserListComponent},
  {path: 'lista_uzytkownikow/stworz', component: UserCreateComponent},
  {path: 'lista_uzytkownikow/edycja/:id', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
