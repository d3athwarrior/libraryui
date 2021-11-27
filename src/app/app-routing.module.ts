import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainviewComponent} from "./mainview/mainview.component";

const routes: Routes = [
  // {path: '', component: LoginComponent},
  // {path: '', component: MainviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
