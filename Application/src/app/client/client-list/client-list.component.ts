import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Klient} from "../../shared/model/Klient";
import {KlientService} from "../../shared/service/KlientService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit ,OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.klienci = this.klientService.getKlienciFromLocal();
  }

  public klienci: Array<Klient> = new Array<Klient>();

  constructor(private klientService: KlientService, private router: Router) {
    this.klienci = klientService.getKlienciFromLocal();
  }

  public delete(clientId:number){
    this.klientService.deleteKlientInLocal(clientId);
    this.router.navigate(['lista_klientow']);
  }

  ngOnInit(): void {
    this.klienci = this.klientService.getKlienciFromLocal();
  }

}
