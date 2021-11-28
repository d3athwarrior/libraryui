import {BookDTO} from "../../../common/dto/book-dto";

export interface UserCommonResponseDTO {
  userId: Number;
  message: String;
  hasError: Boolean;
  issuedBooks: BookDTO[]
}
