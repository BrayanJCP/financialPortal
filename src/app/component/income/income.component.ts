import { Component, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/models/ingreso.model';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  incomeList: Ingreso[];
  ingreso: Ingreso;
  showForm: boolean;

  constructor() {
    this.incomeList = new Array<Ingreso>();
    this.ingreso = new Ingreso();
    this.showForm = false;
  }

  ngOnInit() {
  }
  
  submit(){
    this.incomeList.push(this.ingreso);
    this.ingreso = new Ingreso();
    this.showForm = false;
  }
  editar(ingreso) {
    this.ingreso = ingreso;
    this.showForm = true;
  }
  eliminar(index) {
    this.incomeList.splice(index,1);
  }

}
