import {Component, OnInit} from '@angular/core';
import {KlientService} from "../../shared/service/KlientService";
import {Klient} from "../../shared/model/Klient";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html'
})
export class ClientCreateComponent implements OnInit {

  public klient: Klient = new Klient();

  constructor(private klientService: KlientService, private router: Router) {
  }

  ngOnInit() {
  }

  public save() {
    this.klientService.saveKlientInLocal(this.klient);
    this.router.navigate(['lista_klientow']);
  }

}
