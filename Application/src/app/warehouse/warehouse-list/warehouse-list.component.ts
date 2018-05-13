import {Component} from '@angular/core';
import {Towar} from "../../shared/model/Towar";
import {TowarService} from "../../shared/service/TowarService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html'
})
export class WarehouseListComponent   {

  public towary: Array<Towar> = new Array<Towar>();

  constructor(private towarService: TowarService, private router: Router) {
    this.towary = towarService.getTowaryFromLocal();
  }

  public delete(towarId:number){
    this.towarService.deleteTowarInLocal(towarId);
    this.towary = this.towarService.getTowaryFromLocal();
  }

  public newTowar(){
    this.router.navigate(['lista_towarow/stworz/']);
  }
}
