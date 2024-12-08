export class ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  // response: import("/Users/zenbil/Desktop/projects/short-film-platform/server/src/db/model/IUser").IUser;


  Success(message: string = "İşlem Başarılı") {
    this.success = true;
    this.message = message;
    return this;
  }
}
