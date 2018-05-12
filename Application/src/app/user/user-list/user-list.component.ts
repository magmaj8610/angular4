import {Component} from '@angular/core';
import {UzytkownikService} from "../../shared/service/UzytkownikService";
import {Uzytkownik} from "../../shared/model/Uzytkownik";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {

  public uzytkownicy: Array<Uzytkownik> = new Array<Uzytkownik>();

  constructor(private uzytkownikService: UzytkownikService) {
    this.uzytkownicy = uzytkownikService.getUzytkownicyFromLocal();
  }

}
