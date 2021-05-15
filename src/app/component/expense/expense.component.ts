import { Component, OnInit } from '@angular/core';
import Gasto from 'src/app/models/gasto.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  expenceList: Gasto[];
  gasto: Gasto;
  showForm: boolean;

  constructor() {
    this.expenceList = new Array<Gasto>();
    this.gasto = new Gasto();
    this.showForm = false;
  }

  ngOnInit() {
  }

  submit(){
    this.expenceList.push(this.gasto);
    this.gasto = new Gasto();
    this.showForm = false;
  }
  editar(gasto) {
    this.gasto = gasto;
    this.showForm = true;
  }
  eliminar(index) {
    this.expenceList.splice(index,1);
  }
}
