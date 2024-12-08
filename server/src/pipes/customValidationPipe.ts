import { Injectable } from '@nestjs/common';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
    constructor(private readonly i18n: I18nService) {
        super({
            whitelist: true, // requesste olan DTO'da olmayan propertyleri  temizler
            forbidNonWhitelisted: true, //requestte olan DTO'da olmayan property varsa hata fırlatır
            transform: false, // tip dönüşümğü ?
            exceptionFactory: (errors) => {
                // Hata mesajlarını özelleştirme
                console.log('errors', errors)

                const formattedErrors = errors.map((error) => {
                    const constraints = error.constraints;

                    // Hata mesajlarını özelleştirme ve property ismi ekleme
                    const messages = [];
                    if (error.constraints?.isString) {
                        messages.push(`${error.property}: String olmalı`);
                    }
                    if (error.constraints?.isNotEmpty) {
                        messages.push(`${error.property}: Boş geçilemez`);
                    }
                    if (error.constraints?.isNumber) {
                        messages.push(`${error.property}: Sayı olmalı`);
                    }
                    if (error.constraints?.whitelistValidation) {
                        messages.push(`${error.property}: Böyle bir property DTO'da yok lütfen göndermeyin`);
                    }

                    return messages.length > 0 ? messages : Object.values(constraints);
                });

                return new BadRequestException(formattedErrors);
            },
        });
    }
}
