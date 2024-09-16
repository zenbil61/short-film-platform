export class ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;

  Success (message: string = "İşlem Başarılı") {
    this.success = true;
    this.message = message;
    return this;
  }
}
