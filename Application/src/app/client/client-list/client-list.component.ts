import {Component} from '@angular/core';
import {Klient} from "../../shared/model/Klient";
import {KlientService} from "../../shared/service/KlientService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent {


  public klienci: Array<Klient> = new Array<Klient>();

  constructor(private klientService: KlientService, private router: Router) {
    this.klienci = klientService.getKlienciFromLocal();
  }

  public delete(clientId:number){
    this.klientService.deleteKlientInLocal(clientId);
    this.router.navigate(['lista_klientow']);
  }

}
