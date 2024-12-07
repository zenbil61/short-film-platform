import { Injectable } from '@nestjs/common';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';


@Injectable()
export class CustomValidationPipe extends ValidationPipe {
    constructor(private readonly i18n: I18nService) {
        // constructor() {
        super({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            exceptionFactory: (errors) => {

                // Hata mesajlarını özelleştirme
                const formattedErrors = errors.map((error) => {
                    const constraints = error.constraints;

                    // Burada, @IsString hatalarını global olarak özelleştirebiliriz
                    if (error.constraints?.isString) {
                        error.constraints.isString = i18n.translate('validation.isString');
                    }

                    return constraints ? Object.values(constraints) : [];
                    // return {
                    //   field: error.property,
                    //   messages: constraints ? Object.values(constraints) : [],
                    // };
                });
                return new BadRequestException(formattedErrors);
            },
        });
    }
}
