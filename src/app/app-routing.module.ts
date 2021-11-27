import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UserHomeComponent} from "./userhome/user-home.component";
import {BorrowComponent} from "./userhome/borrow/borrow.component";
import {MyBooksComponent} from "./userhome/mybooks/my-books.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'user-home',
    loadChildren: () => import('./userhome/user-home.module').then(m=>m.UserHomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
