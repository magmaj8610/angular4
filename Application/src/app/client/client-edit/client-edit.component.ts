import {Component, OnInit} from '@angular/core';
import {Klient} from "../../shared/model/Klient";
import {KlientService} from "../../shared/service/KlientService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html'
})
export class ClientEditComponent implements OnInit {

  public klient:Klient = new Klient();

  constructor(private klientService:KlientService,private router:Router,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.klient = klientService.getKlientFromLocal(params['id']);
      }
    });
  }



  ngOnInit() {
  }

  public save(){
    this.klientService.saveKlientInLocal(this.klient);
    this.router.navigate(['lista_klientow']);
  }
}
