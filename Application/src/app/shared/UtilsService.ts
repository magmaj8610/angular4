import {Injectable} from "@angular/core";

@Injectable()
export class UtilsService {

  public selectedLink:string = 'userListLinkId';
  private allList: Array<string> = ["user_list", "invoice_list"];

  public isMouseOver(user_list):boolean{
    return this.allList.some(x => x === user_list);
  }

}
