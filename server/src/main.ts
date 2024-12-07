import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import createSwagger from './common/createSwagger';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { CustomValidationPipe } from './pipes/customValidationPipe'
import { I18nService } from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // class-tranform ve class-validator ile entegre olan yer
  app.useGlobalPipes(new CustomValidationPipe(app.get(I18nService)));

  createSwagger(app);
  await app.listen(3000);
}




bootstrap();
