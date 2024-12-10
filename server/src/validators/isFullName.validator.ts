import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

// IsFullName Validator'ı
export function IsFullName(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isFullName',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          // String olup olmadığını kontrol et
          if (typeof value !== 'string') {
            return false;
          }

          // Sabit minLength ve maxLength değerleri
          const minLength = 5;
          const maxLength = 150;

          // MinLength kontrolü
          if (value.length < minLength) {
            return false;
          }

          // MaxLength kontrolü
          if (value.length > maxLength) {
            return false;
          }

          // Rakamsal karakter olup olmadığını kontrol et
          const hasNumber = /\d/.test(value);
          if (hasNumber) {
            return false; // Eğer değerde rakam varsa, geçersiz
          }

          // Ad ve soyad arasında boşluk olup olmadığını kontrol et (en az 2 kelime)
          const nameParts = value.trim().split(' ');
          if (nameParts.length < 2) {
            return false; // En az iki bölüm olmalı (ad ve soyad)
          }

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return `Geçerli bir ad soyad giriniz`;
        },
      },
    });
  };
}
