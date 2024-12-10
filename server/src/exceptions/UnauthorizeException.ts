import { HttpException, HttpStatus } from "@nestjs/common";
import { ERROR_CODE } from "src/common/constant";
import { ICustomException } from "./ICustomException";

export class UnauthorizeException extends HttpException {
    constructor(
        message: string = "Kimlik doğrulanamadı",
        errorCode: string = ERROR_CODE.UNAUTHORİZED,
        status: HttpStatus = HttpStatus.UNAUTHORIZED
    ) {
        const exceptionInfo: ICustomException = { message, status, errorCode }
        super(exceptionInfo, status);    }
}
