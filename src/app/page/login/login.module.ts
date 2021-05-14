import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ComponentModule } from 'src/app/component/component.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ComponentModule
  ]
})
export class LoginModule { }
