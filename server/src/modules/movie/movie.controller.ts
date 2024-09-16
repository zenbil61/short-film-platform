import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly service: MovieService) {}

  @Get()
  getMovie(): string {
    return this.service.getMovie();
  }
}
