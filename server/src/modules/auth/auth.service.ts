import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const dbUser = {
      userId: 61,
      email: 'mustafa@zenbil.com',
      password: '616161',
    };
    if (dbUser.email !== email || dbUser.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: dbUser.userId, email: dbUser.email };
    const token = await this.jwtService.signAsync(payload);
    return {
      access_token: token,
    };
  }
}
