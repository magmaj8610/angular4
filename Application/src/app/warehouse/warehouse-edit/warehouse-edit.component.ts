import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Towar} from "../../shared/model/Towar";
import {TowarService} from "../../shared/service/TowarService";

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html'
})
export class WarehouseEditComponent implements OnInit {

  public towar:Towar = new Towar();

  constructor(private towarService:TowarService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.towar = towarService.getTowarFromLocal(params['id']);
      }
    });
  }

  ngOnInit() {
  }

  public save(){
    this.towarService.saveTowarInLocal(this.towar);
    this.router.navigate(['lista_towarow']);
  }
}
