import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  healthCheck(): Object {
    return {
      status: 200,
      message: 'servis is runnable..',
    };
  }
}
