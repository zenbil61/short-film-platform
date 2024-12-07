import { Module } from '@nestjs/common';
import { I18nModule, I18nJsonLoader, AcceptLanguageResolver } from 'nestjs-i18n';
import { join } from 'path';
import { AppController } from './app.controller';
import { MovieModule } from './modules/movie/movie.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ContentModule } from './modules/content/content.module';
import { OtpModule } from './modules/otp/otp.module';

@Module({
  imports: [
    MovieModule,
    UserModule,
    AuthModule,
    ContentModule,
    OtpModule,
    I18nModule.forRoot({
      fallbackLanguage: 'en', // Varsayılan dil
      loaderOptions: {
        path: join(__dirname, '/i18n/'),
        watch: process.env.NODE_ENV !== 'production', // Sadece geliştirme ortamında dosya değişikliklerini izle
      },
      loader: I18nJsonLoader, // JSON formatındaki çevirileri yüklemek için
      resolvers: [
        new AcceptLanguageResolver(),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
