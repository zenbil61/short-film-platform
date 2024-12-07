import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { OtpService } from './otp.service';

@Controller('otp')
export class OtpController {
  constructor(private readonly service: OtpService) { }

  @Get()
  getOtp(): string {
    return "Otp detay"
  }
}
