import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import createSwagger from './common/createSwagger';
import { ValidationPipe } from '@nestjs/common';
import { CustomValidationPipe } from './pipes/customValidationPipe'
import { I18nService } from 'nestjs-i18n';
import * as bodyParser from 'body-parser';
import { CustomExceptionFilter } from './filters/CustomExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // class-tranform ve class-validator ile entegre olan yer
  app.useGlobalPipes(new CustomValidationPipe(app.get(I18nService)));
  app.useGlobalFilters(new CustomExceptionFilter());


  // Body-parser ayarları - Maximum limit uyarısı için base64 gönderirken sıkıntı oluyor
  app.use(bodyParser.json({ limit: '2mb' })); // JSON boyut sınırını artır
  app.use(bodyParser.urlencoded({ limit: '2mb', extended: true })); // URL-encoded boyut sınırını artır

  createSwagger(app);
  await app.listen(3000);
}




bootstrap();
