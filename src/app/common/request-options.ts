import {HttpHeaders} from "@angular/common/http";

export class RequestOptions {
  static options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;UTF-8'
    }),
    observe: 'response' as 'body'
  }
}
