import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentModule } from 'src/app/component/component.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ComponentModule
  ]
})
export class DashboardModule { }
