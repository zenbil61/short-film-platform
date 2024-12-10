export class ExceptionResponse {
    private readonly success: boolean = false;
    message: string | object;
    errorCode: string;
    constructor(message?: string, errorCode: string = '') {
        this.errorCode = errorCode;
        this.message = message;
    }
}
