import {Component, OnDestroy, OnInit} from '@angular/core';
import {BorrowerService} from "../borrower.service";
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {BookDTO} from "../../common/dto/book-dto";
import {AuthService} from "../../authentication/auth.service";

@Component({
  selector: 'app-mybooks',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css', '../common-table-layout.css']
})
export class MyBooksComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  dataSource: MatTableDataSource<BookDTO> = new MatTableDataSource<BookDTO>();
  showLoader: Boolean = true;

  constructor(private borrowerService: BorrowerService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.showLoader = true;
    this.subscriptions.push(this.borrowerService.getBorrowedBooks(this.authService.loggedInUserId).subscribe(userBookResponseDTO => {
      this.dataSource.data = userBookResponseDTO.issuedBooks;
      this.showLoader = false;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  returnIssuedBook(bookId: Number) {
    this.showLoader = true;
    this.subscriptions.push(this.borrowerService.returnBorrowedBook(this.authService.loggedInUserId, bookId)
      .subscribe(response => {
        let userReturnBookResponseDTO = response.body;
        if (userReturnBookResponseDTO.hasError) {
          alert(userReturnBookResponseDTO.message);
        } else {
          this.dataSource.data = userReturnBookResponseDTO.issuedBooks;
        }
        this.showLoader = false;
      }));
  }
}
