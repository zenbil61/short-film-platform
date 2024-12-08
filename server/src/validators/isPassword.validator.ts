import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export function IsPassword(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'isPassword',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {

                    // Değerin string olup olmadığını kontrol et
                    if (typeof value !== 'string') {
                        return false; // String değilse hata durumu
                    }

                    // MinLength ve MaxLength kontrolü
                    const minLength = 6;
                    const maxLength = 50;
                    if (value.length < minLength || value.length > maxLength) {
                        return false // Uzunluk hatası
                    }

                    // En az bir harf ve bir sayı olması gerektiğini kontrol et
                    const hasLetter = /[a-zA-Z]/.test(value);
                    const hasNumber = /\d/.test(value);

                    if (!hasLetter || !hasNumber) {
                        return false; // Harf ve rakam hatası
                    }

                    return true; // Şifre geçerli
                },
                defaultMessage(args: ValidationArguments) {
                    switch (args.value) {
                        case 'string':
                            return `Şifre bir string olmalı.`;
                        case 'min_max':
                            return `Şifreniz en az 6, en fazla 50 karakter olmalı.`;
                        case 'text_and_number':
                            return `Şifrenizde en az 1 harf ve 1 sayı olmalı.`;
                        default:
                            return `Geçersiz şifre.`;
                    }
                },
            },
        });
    };
}
