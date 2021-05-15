import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentModule } from 'src/app/component/component.module';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/component/account/account.component';
import { IncomeComponent } from 'src/app/component/income/income.component';
import { ExpenseComponent } from 'src/app/component/expense/expense.component';


const routes: Routes = [
  {path:"", component: DashboardComponent,
    children:[
      {path:"account", component: AccountComponent},
      {path:"income", component: IncomeComponent},
      {path:"expense", component: ExpenseComponent},
    ]
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ComponentModule,
    RouterModule.forChild(routes)
  ],
  exports:[]
})
export class DashboardModule { }
