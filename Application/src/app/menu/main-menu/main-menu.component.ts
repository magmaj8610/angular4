import {Component, OnInit} from '@angular/core';
import {UtilsService} from "../../shared/service/UtilsService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent implements OnInit {

  constructor(public utilsService: UtilsService, private router: Router) {
  }

  ngOnInit() {
  }

  gotoPage(selectLink: string) {
    this.utilsService.selectedLink = selectLink;
    this.router.navigate([selectLink]);

  }
}
