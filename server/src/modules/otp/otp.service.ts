import { Injectable } from '@nestjs/common';

@Injectable()
export class OtpService {
  sendSMS(): string {
    return 'sms gönderildi';
  }
}
