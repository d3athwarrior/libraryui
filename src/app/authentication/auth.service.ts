import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";
import {BaseHttpService} from "../common/service/base-http-service";

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseHttpService {
  isLoggedIn = false;

  loggedInUserId: number = -1;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  login(userId: Number): Observable<any> {
    return this.httpClient.post<number>(environment.apiUrl + "/login", userId, this.options)
      .pipe(catchError(AuthService.handleError));
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  // This is just a place holder, errors have not been handled gracefully yet
  private static handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
