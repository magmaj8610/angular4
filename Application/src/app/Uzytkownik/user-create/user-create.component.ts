import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../User";
import {AbstractUserComponent} from "../abstract-user/abstract-user.component";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html'
})
export class UserCreateComponent extends AbstractUserComponent implements OnInit {

  public user: User = new User();

  constructor(@Inject(LOCAL_STORAGE) private storageChild: WebStorageService, private router: Router) {
    super(storageChild);
  }

  ngOnInit() {
  }

  public save() {
    this.saveUserInLocal(this.user);
    this.router.navigate(['user']);
  }


}
