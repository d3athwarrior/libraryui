import {BookDTO} from "./book-dto";

export interface BookIssueDTO {
  userId: Number;
  message: String;
  bookDTO: BookDTO;
  hasError: Boolean;
}
