import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"", loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule), pathMatch: 'full'},
  {path:"home", loadChildren: () => import('./page/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
