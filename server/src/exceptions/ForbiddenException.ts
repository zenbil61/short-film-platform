import { HttpException, HttpStatus } from "@nestjs/common";
import { ERROR_CODE } from "src/common/constant";
import { ICustomException } from "./ICustomException";

export class ForbiddenException extends HttpException {
    constructor(
        message: string = "Yetkisiz işlem",
        errorCode: string = ERROR_CODE.FORBIDDEN,
        status: HttpStatus = HttpStatus.FORBIDDEN
    ) {
        const exceptionInfo: ICustomException = { message, status, errorCode }
        super(exceptionInfo, status);    }
}
