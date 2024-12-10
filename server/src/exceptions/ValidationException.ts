import { HttpException, HttpStatus } from "@nestjs/common";
import { ERROR_CODE } from "src/common/constant";
import { ICustomException } from "./ICustomException";

export class ValidationException extends HttpException {
    constructor(
        message: string | object = 'Validasyon Hatası',
        errorCode: string = ERROR_CODE.VALIDATON,
        status: HttpStatus = HttpStatus.BAD_REQUEST
    ) {
        const exceptionInfo: ICustomException = { message, status, errorCode }
        super(exceptionInfo, status);    }
}
