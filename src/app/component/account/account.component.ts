import { Component, OnInit } from '@angular/core';
import Cuenta from 'src/app/models/cuenta.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accountList: Cuenta[];
  cuenta: Cuenta;
  showForm: boolean;

  constructor() {
    this.accountList = new Array<Cuenta>();
    this.cuenta = new Cuenta();
    this.showForm = false;
  }

  ngOnInit() {
  }

  submit(){
    this.accountList.push(this.cuenta);
    this.cuenta = new Cuenta();
    this.showForm = false;
  }
  editar(cuenta) {
    this.cuenta = cuenta;
    this.showForm = true;
  }
  eliminar(index) {
    this.accountList.splice(index,1);
  }

}
