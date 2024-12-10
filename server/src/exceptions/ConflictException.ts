import { HttpException, HttpStatus } from "@nestjs/common";
import { ERROR_CODE } from "src/common/constant";
import { ICustomException } from './ICustomException'

export class ConflictException extends HttpException {
    constructor(
        message: string = "Çakışma oldu",
        errorCode: string = ERROR_CODE.CONFLICT,
        status: HttpStatus = HttpStatus.CONFLICT
    ) {
        const exceptionInfo: ICustomException = { message, status, errorCode }
        super(exceptionInfo, status);
    }
}
