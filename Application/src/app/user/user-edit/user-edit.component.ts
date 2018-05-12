import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Uzytkownik} from "../../shared/model/Uzytkownik";
import {UzytkownikService} from "../../shared/service/UzytkownikService";


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent  {

  public uzytkownik: Uzytkownik = new Uzytkownik();

  constructor(private route: ActivatedRoute, private router: Router,private uzytkownikService: UzytkownikService) {
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.uzytkownik = uzytkownikService.getUzytkownikFromLocal(params['id']);
      }
    });
  }

  public save() {
    this.uzytkownikService.saveUzytkownikInLocal(this.uzytkownik);
    this.router.navigate(['uzytkownik']);
  }
}
