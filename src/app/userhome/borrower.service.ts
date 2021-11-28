import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseHttpService} from "../common/service/base-http-service";
import {Observable} from "rxjs";
import {UserBookResponseDTO} from "./mybooks/dto/user-book-response-dto";
import {environment} from "../../environments/environment";
import {UserReturnBookResponseDTO} from "./mybooks/dto/user-return-book-response-dto";

@Injectable({
  providedIn: 'root'
})
/**
 * This service will be used only in the user module to call api that deal with
 * borrower actions
 */
export class BorrowerService extends BaseHttpService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getBorrowedBooks(userId: Number): Observable<UserBookResponseDTO> {
    return this.httpClient.get<UserBookResponseDTO>(environment.apiUrl + "/users/" + userId + "/issuedBooks")
  }

  public returnBorrowedBook(userId: Number, bookId: Number): Observable<any> {
    return this.httpClient.post<UserReturnBookResponseDTO>(environment.apiUrl + "/users/" + userId + "/returnbook/" + bookId, null, this.options);
  }
}
