import { Module } from '@nestjs/common';
import { I18nModule, I18nJsonLoader, AcceptLanguageResolver } from 'nestjs-i18n';
import { join } from 'path';

@Module({
    imports: [
        I18nModule.forRoot({
            fallbackLanguage: 'tr', // Varsayılan dil
            loaderOptions: {
                path: join(__dirname, '..', '/i18n/'), // Çeviri dosyalarının yolu
                watch: process.env.NODE_ENV !== 'production', // Geliştirme ortamında dosya değişikliklerini izle
            },
            loader: I18nJsonLoader, // JSON formatındaki çeviriler için
            resolvers: [
                new AcceptLanguageResolver(), // HTTP başlıklarından Accept-Language'i çözümlemek için
            ],
        }),
    ],
})
export class MyI18nModule { }
