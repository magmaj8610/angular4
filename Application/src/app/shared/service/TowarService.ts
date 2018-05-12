import {Inject, Injectable} from "@angular/core";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";

@Injectable()
export class TowarService {
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }
}
