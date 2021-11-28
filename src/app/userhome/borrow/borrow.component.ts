import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BookService} from "../../common/service/book.service";
import {BorrowerService} from "../borrower.service";
import {BookDTO} from "../../common/dto/book-dto";
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {AuthService} from "../../authentication/auth.service";

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<BookDTO> = new MatTableDataSource<BookDTO>();
  showLoader: Boolean = true;
  resultsLength = 0;

  constructor(private bookService: BookService, private borrowerService: BorrowerService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.bookService.getAllBooks().subscribe(books => {
      this.dataSource.data = books;
      this.resultsLength = books.length;
      this.showLoader = false;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  borrowBook(bookId: Number) {
    this.showLoader = true;
    this.subscriptions.push(
      this.bookService.postABorrowRequest(bookId, this.authService.loggedInUserId)
        .subscribe((response) => {
          let bookIssueDTO = response.body;
          if (bookIssueDTO.hasError) {
            alert(bookIssueDTO.message);
            this.showLoader = false;
          }
          this.dataSource.data.forEach(value => {
            if (value.id === bookIssueDTO.bookDTO.id) {
              Object.assign(value, bookIssueDTO.bookDTO);
              alert(bookIssueDTO.message);
              this.showLoader = false;
            }
          });
        }));
  }
}
