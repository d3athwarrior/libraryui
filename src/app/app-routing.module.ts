import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeviewComponent} from "./mainview/homeview.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
