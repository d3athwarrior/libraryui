import {UserCommonResponseDTO} from "./user-common-response-dto";

export interface UserReturnBookResponseDTO extends UserCommonResponseDTO {
  returnedBookId: Number;
}
