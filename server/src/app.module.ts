import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MovieModule } from './modules/movie/movie.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [MovieModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
