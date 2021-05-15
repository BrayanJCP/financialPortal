import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ComponentModule } from 'src/app/component/component.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: LoginComponent},
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ComponentModule,
    RouterModule.forChild(routes)
  ],
  exports:[]
})
export class LoginModule { }
