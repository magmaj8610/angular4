import {Inject, Injectable} from "@angular/core";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";
import {Faktura} from "../model/Faktura";

@Injectable()
export class FakturaService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }

  public getFakturaFromLocal(key: number): Faktura {
    let Faktury: Array<Faktura> = this.storage.get("Faktury");
    let i = 0;
    for (let Faktura of Faktury) {
      if (key == Faktura.id) {
        return Faktura;
      }
      i++;
    }
    return new Faktura();
  }

  public getFakturyFromLocal(): Array<Faktura> {
    let Faktury: Array<Faktura> = this.storage.get("Faktury");
    if (Faktury == null) {
      Faktury = new Array<Faktura>();
    }
    return Faktury;
  }

  public saveFakturaInLocal(Faktura: Faktura): void {
    let Faktury: Array<Faktura> = this.storage.get("Faktury");
    if (Faktury == null) {
      Faktury = new Array<Faktura>();
    }
    let i = 0;
    let find = false;
    for (let FakturaTemp of Faktury) {
      if (Faktura.id == FakturaTemp.id) {
        Faktury[i] = Faktura;
        find = true;
      }
      i++;
    }
    if (!find) {
      Faktury[i] = Faktura;
    }
    this.storage.set("Faktury", Faktury);
  }
}
