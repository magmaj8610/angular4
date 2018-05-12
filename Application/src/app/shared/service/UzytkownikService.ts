import {Inject, Injectable} from "@angular/core";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";
import {Uzytkownik} from "../model/Uzytkownik";

@Injectable()
export class UzytkownikService {
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }

  public getUzytkownikFromLocal(key: number): Uzytkownik {
    let Uzytkownicy: Array<Uzytkownik> = this.storage.get("Uzytkownicy");
    let i = 0;
    for (let Uzytkownik of Uzytkownicy) {
      if (key == Uzytkownik.id) {
        return Uzytkownik;
      }
      i++;
    }
    return new Uzytkownik();
  }

  public getUzytkownicyFromLocal(): Array<Uzytkownik> {
    let Uzytkownicy: Array<Uzytkownik> = this.storage.get("Uzytkownicy");
    if (Uzytkownicy == null) {
      Uzytkownicy = new Array<Uzytkownik>();
    }
    return Uzytkownicy;
  }

  public saveUzytkownikInLocal(Uzytkownik: Uzytkownik): void {
    let Uzytkownicy: Array<Uzytkownik> = this.storage.get("Uzytkownicy");
    if (Uzytkownicy == null) {
      Uzytkownicy = new Array<Uzytkownik>();
    }
    let i = 0;
    let find = false;
    for (let UzytkownikTemp of Uzytkownicy) {
      if (Uzytkownik.id == UzytkownikTemp.id) {
        Uzytkownicy[i] = Uzytkownik;
        find = true;
      }
      i++;
    }
    if (!find) {
      Uzytkownicy[i] = Uzytkownik;
    }
    this.storage.set("Uzytkownicy", Uzytkownicy);
  }

}
