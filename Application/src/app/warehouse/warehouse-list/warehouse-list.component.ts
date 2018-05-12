import {Component} from '@angular/core';
import {Towar} from "../../shared/model/Towar";
import {TowarService} from "../../shared/service/TowarService";

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html'
})
export class WarehouseListComponent   {

  public towary: Array<Towar> = new Array<Towar>();

  constructor(private towarService: TowarService) {
    this.towary = towarService.getTowaryFromLocal();
  }
}
