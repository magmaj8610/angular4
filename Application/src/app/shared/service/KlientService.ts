import {Inject, Injectable} from "@angular/core";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";
import {Klient} from "../model/Klient";

@Injectable()
export class KlientService {
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }

  public getKlientFromLocal(key: number): Klient {
    let Klienci: Array<Klient> = this.storage.get("Klienci");
    let i = 0;
    for (let Klient of Klienci) {
      if (key == Klient.id) {
        return Klient;
      }
      i++;
    }
    return new Klient();
  }

  public getKlienciFromLocal(): Array<Klient> {
    let Klienci: Array<Klient> = this.storage.get("Klienci");
    if (Klienci == null) {
      Klienci = new Array<Klient>();
    }
    return Klienci;
  }

  public saveKlientInLocal(klient: Klient): void {
    let Klienci: Array<Klient> = this.storage.get("Klienci");
    if (Klienci == null) {
      Klienci = new Array<Klient>();
    }
    let i = 0;
    let find = false;
    for (let KlientTemp of Klienci) {
      if (klient.id == KlientTemp.id) {
        Klienci[i] = klient;
        find = true;
      }
      i++;
    }
    if (!find) {
      Klienci[i] = klient;
    }
    this.storage.set("Klienci", Klienci);
  }

  public deleteKlientInLocal(klientid:number): void {
    let Klienci: Array<Klient> = this.storage.get("Klienci");
    if (Klienci == null) {
      Klienci = new Array<Klient>();
    }
    let i = 0;
    let index = -1;
    for (let KlientTemp of Klienci) {
      if (klientid == KlientTemp.id) {
        index = i;
      }
      i++;
    }
    if (index > -1) {
      Klienci.splice(index,1);
    }
    this.storage.set("Klienci", Klienci);
  }
}
