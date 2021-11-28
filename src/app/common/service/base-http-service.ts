import {HttpClient, HttpHeaders} from "@angular/common/http";

export abstract class BaseHttpService {
  protected options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;UTF-8'
    }),
    observe: 'response' as 'body'
  }
  protected httpClient: HttpClient;

  protected constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

}
