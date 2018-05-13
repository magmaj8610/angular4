import {Component, OnInit} from '@angular/core';
import {Towar} from "../../shared/model/Towar";
import {Router} from "@angular/router";
import {TowarService} from "../../shared/service/TowarService";

@Component({
  selector: 'app-warehouse-create',
  templateUrl: './warehouse-create.component.html'
})
export class WarehouseCreateComponent implements OnInit {

  public towar: Towar = new Towar();

  constructor(private towarService: TowarService, private router: Router) {
  }

  ngOnInit() {
  }

  public save() {
    this.towarService.saveTowarInLocal(this.towar);
    this.router.navigate(['lista_towarow']);
  }
}
