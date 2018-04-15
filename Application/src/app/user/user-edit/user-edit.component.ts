import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../User";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractUserComponent} from "../abstract-user/abstract-user.component";
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent extends AbstractUserComponent implements OnInit {

  public user: User = new User();

  constructor(private route: ActivatedRoute, @Inject(LOCAL_STORAGE) private storageChild: WebStorageService, private router: Router) {
    super(storageChild);
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.user = this.getUserFromLocal(params['id']);
      }
    });
  }

  ngOnInit() {

  }

  public save() {
    this.saveUserInLocal(this.user);
    this.router.navigate(['user']);
  }
}
