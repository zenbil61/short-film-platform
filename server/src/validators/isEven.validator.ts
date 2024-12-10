import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsEven(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                // `validate` fonksiyonu, custom validatörün mantığını içerir
                validate(value: any, args: ValidationArguments) {
                    // Değerin sayısal olup olmadığı kontrol edilir ve çift (even) olup olmadığına bakılır
                    return typeof value === 'number' && value % 2 === 0;
                },
                // Hata mesajı
                defaultMessage(args: ValidationArguments) {
                    return `${args.property} ANANA HUMANAKİ`;
                },
            },
        });
    };
}
