import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MovieModule } from './modules/movie/movie.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ContentModule } from './modules/content/content.module';
import { OtpModule } from './modules/otp/otp.module';
import { MyI18nModule } from './modules/myI18n.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [
    MovieModule,
    UserModule,
    AuthModule,
    ContentModule,
    OtpModule,
    UploadModule,
    MyI18nModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
