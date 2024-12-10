import { HttpException, HttpStatus } from "@nestjs/common";
import { ERROR_CODE } from "src/common/constant";
import { ICustomException } from "./ICustomException";

export class CustomException extends HttpException {
    constructor(
        message: string = "Özel bir hata oluştu",
        errorCode: string = ERROR_CODE.CUSTOM,
        status: HttpStatus = HttpStatus.BAD_REQUEST
    ) {
        const exceptionInfo: ICustomException = { message, status, errorCode }
        super(exceptionInfo, status);    }
}
