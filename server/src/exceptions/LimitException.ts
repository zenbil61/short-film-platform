import { HttpException, HttpStatus } from "@nestjs/common";
import { ERROR_CODE } from "src/common/constant";
import { ICustomException } from "./ICustomException";

export class LimitException extends HttpException {
    constructor(
        message: string = "Limit Aşımı",
        errorCode: string = ERROR_CODE.LIMIT,
        status: HttpStatus = HttpStatus.BAD_REQUEST
    ) {
        const exceptionInfo: ICustomException = { message, status, errorCode }
        super(exceptionInfo, status);    }
}
