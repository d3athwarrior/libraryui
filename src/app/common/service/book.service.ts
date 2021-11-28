import {Injectable} from '@angular/core';
import {BaseHttpService} from "./base-http-service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookDTO} from "../dto/book-dto";
import {environment} from "../../../environments/environment";
import {BookIssueDTO} from "../dto/book-issue-dto";

@Injectable({
  providedIn: 'root'
})
/**
 * This service can be reused in the case of a librarian and a normal borrower
 */
export class BookService extends BaseHttpService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getAllBooks(): Observable<BookDTO[]> {
    return this.httpClient.get<BookDTO[]>(environment.apiUrl + "/books/all");
  }

  public postABorrowRequest(bookId: Number, userId: Number): Observable<any> {
    return this.httpClient.post<BookIssueDTO>(environment.apiUrl + "/books/" + bookId.toString() + "/issueto/" + userId.toString(), null, this.options);
  }
}
