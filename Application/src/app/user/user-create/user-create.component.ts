import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UzytkownikService} from "../../shared/service/UzytkownikService";
import {Uzytkownik} from "../../shared/model/Uzytkownik";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html'
})
export class UserCreateComponent {

  public uzytkownik: Uzytkownik = new Uzytkownik();

  constructor(private uzytkownikService: UzytkownikService, private router: Router) {
  }

  public save() {
    this.uzytkownikService.saveUzytkownikInLocal(this.uzytkownik);
    this.router.navigate(['lista_uzytkownikow']);
  }

}
