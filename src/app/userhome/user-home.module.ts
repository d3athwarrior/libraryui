import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BorrowComponent} from './borrow/borrow.component';
import {MyBooksComponent} from './mybooks/my-books.component';
import {RouterModule, Routes} from "@angular/router";
import {UserHomeComponent} from "./user-home.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";

const userRoutes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    children: [
      {
        path: '', redirectTo: 'borrow'
      },
      {
        path: 'borrow',
        component: BorrowComponent
      },
      {
        path: 'my-books',
        component: MyBooksComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    BorrowComponent,
    MyBooksComponent,
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class UserHomeModule {
}
