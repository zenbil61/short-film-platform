import { Controller, Get } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor(private readonly i18n: I18nService) {}

  @Get()
  healthCheck(): Object {
    return {
      status: 200,
      message: this.i18n.translate('validation.isString'),
    };
  }
}
