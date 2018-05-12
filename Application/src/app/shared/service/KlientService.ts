import {Inject, Injectable} from "@angular/core";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";

@Injectable()
export class KlientService {
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }
}
