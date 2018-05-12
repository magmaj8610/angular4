import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../User";
import {AbstractUserComponent} from "../abstract-user/abstract-user.component";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent extends AbstractUserComponent implements OnInit {

  public users: Array<User> = new Array<User>();

  constructor(@Inject(LOCAL_STORAGE) private storageChild: WebStorageService) {
    super(storageChild);
    this.users = this.getUsersFromLocal();
  }

  ngOnInit() {
  }
}
