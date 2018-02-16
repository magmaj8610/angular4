import {Component, Inject, OnInit} from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from "angular-webstorage-service";
import {Invoice} from "../Invoice";

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {

  public invoice:Invoice;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.invoice[key]= this.storage.get(key);
  }

  getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.invoice[key]= this.storage.get(key);
    console.log(this.invoice);
  }
}
