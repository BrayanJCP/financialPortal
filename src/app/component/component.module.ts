import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';



@NgModule({
  declarations: [
    AccountComponent,
    IncomeComponent,
    ExpenseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountComponent,
    IncomeComponent,
    ExpenseComponent
  ]
})
export class ComponentModule { }
