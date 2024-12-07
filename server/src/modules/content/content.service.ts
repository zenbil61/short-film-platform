import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
  getMovie(): string {
    return 'yüzüklerin efendisi';
  }
}
