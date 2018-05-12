import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvoiceListComponent} from "./invoice/invoice-list/invoice-list.component";
import {InvoiceCreateComponent} from "./invoice/invoice-create/invoice-create.component";
import {InvoiceEditComponent} from "./invoice/invoice-edit/invoice-edit.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserCreateComponent} from "./user/user-create/user-create.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";

const routes: Routes = [
  {path: 'invoice_list', component: InvoiceListComponent},
  {path: 'invoice_list/create', component: InvoiceCreateComponent},
  {path: 'invoice_list/edit/:id', component: InvoiceEditComponent},
  {path: 'user_list', component: UserListComponent},
  {path: 'user_list/create', component: UserCreateComponent},
  {path: 'user_list/edit/:id', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
