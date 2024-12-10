import { HttpException, HttpStatus } from "@nestjs/common";
import { ERROR_CODE } from "src/common/constant";
import { ICustomException } from "./ICustomException";

export class NotFoundException extends HttpException {
    constructor(
        message: string = "İçerik bulunamadı",
        errorCode: string = ERROR_CODE.NOT_FOUND,
        status: HttpStatus = HttpStatus.NOT_FOUND
    ) {
        const exceptionInfo: ICustomException = { message, status, errorCode }
        super(exceptionInfo, status);    }
}
