import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  getMovie(): string {
    return 'yüzüklerin efendisi';
  }
}
