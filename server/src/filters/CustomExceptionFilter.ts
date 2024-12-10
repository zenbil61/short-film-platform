import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse } from 'src/common/apiResponse';
import { ExceptionResponse } from 'src/common/exceptionResponse';
import { ICustomException } from 'src/exceptions/ICustomException';
import {
    CustomException,
    LimitException,
    UnauthorizeException,
    ForbiddenException,
    ConflictException,
    NotFoundException,
    ValidationException
} from 'src/exceptions';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        const exceptionResponse: ICustomException = exception.getResponse() as ICustomException; // cast ediyoruz IExceptiona

        const customResponse = new ExceptionResponse();
        customResponse.message = exceptionResponse.message;
        customResponse.errorCode = exceptionResponse.errorCode;

        if (exception instanceof ConflictException) {

        } else if (exception instanceof CustomException) {

        }
        else if (exception instanceof ForbiddenException) {

        }
        else if (exception instanceof LimitException) {

        }
        else if (exception instanceof NotFoundException) {

        }
        else if (exception instanceof UnauthorizeException) {

        }
        else if (exception instanceof ValidationException) {
            
        }
        else {
            customResponse.message = 'Bilinmeyen bir hata oluştu';
            customResponse.errorCode = '-1'
        }

        response.status(status).json(customResponse);
    }
}
