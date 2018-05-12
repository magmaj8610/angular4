import {Inject, Injectable} from "@angular/core";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";
import {Towar} from "../model/Towar";

@Injectable()
export class TowarService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }

  public getTowarFromLocal(key: number): Towar {
    let Towary: Array<Towar> = this.storage.get("Towary");
    let i = 0;
    for (let Towar of Towary) {
      if (key == Towar.id) {
        return Towar;
      }
      i++;
    }
    return new Towar();
  }

  public getTowaryFromLocal(): Array<Towar> {
    let Towary: Array<Towar> = this.storage.get("Towary");
    if (Towary == null) {
      Towary = new Array<Towar>();
    }
    return Towary;
  }

  public saveTowarInLocal(Towar: Towar): void {
    let Towary: Array<Towar> = this.storage.get("Towary");
    if (Towary == null) {
      Towary = new Array<Towar>();
    }
    let i = 0;
    let find = false;
    for (let TowarTemp of Towary) {
      if (Towar.id == TowarTemp.id) {
        Towary[i] = Towar;
        find = true;
      }
      i++;
    }
    if (!find) {
      Towary[i] = Towar;
    }
    this.storage.set("Towary", Towary);
  }
}
