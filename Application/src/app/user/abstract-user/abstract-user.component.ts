import {Component, Inject, OnInit} from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";
import {User} from "../User";

@Component({
  selector: 'app-abstract-user',
  templateUrl: './abstract-user.component.html'
})
export class AbstractUserComponent implements OnInit {


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }

  ngOnInit() {
  }


  protected getUserFromLocal(key: number): User {
    let users: Array<User> = this.storage.get("users");
    let i = 0;
    for (let user of users) {
      if (key == user.id) {
        return user;
      }
      i++;
    }
    return new User();
  }

  protected getUsersFromLocal(): Array<User> {
    let users: Array<User> = this.storage.get("users");
    if (users == null) {
      users = new Array<User>();
    }
    return users;
  }

  protected saveUserInLocal(user: User): void {
    let users: Array<User> = this.storage.get("users");
    if (users == null) {
      users = new Array<User>();
    }
    let i = 0;
    let find = false;
    for (let userTemp of users) {
      if (user.id == userTemp.id) {
        users[i] = user;
        find = true;
      }
      i++;
    }
    if (!find) {
      users[i] = user;
    }
    this.storage.set("users", users);
  }

}
