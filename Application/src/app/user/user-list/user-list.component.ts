import {Component} from '@angular/core';
import {UzytkownikService} from "../../shared/service/UzytkownikService";
import {Uzytkownik} from "../../shared/model/Uzytkownik";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {

  public uzytkownicy: Array<Uzytkownik> = new Array<Uzytkownik>();

  constructor(private uzytkownikService: UzytkownikService, private router: Router) {
    this.uzytkownicy = uzytkownikService.getUzytkownicyFromLocal();
  }
  public delete(uzytkownikId:number){
    this.uzytkownikService.deleteUzytkownikInLocal(uzytkownikId);
    this.uzytkownicy = this.uzytkownikService.getUzytkownicyFromLocal();
  }
  public newUzytkownik(){
    this.router.navigate(['lista_uzytkownikow/stworz/']);
  }

}
