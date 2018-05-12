import {Component} from '@angular/core';
import {Klient} from "../../shared/model/Klient";
import {KlientService} from "../../shared/service/KlientService";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent {


  public klienci: Array<Klient> = new Array<Klient>();

  constructor(private klientService: KlientService) {
    this.klienci = klientService.getKlienciFromLocal();
  }

}
