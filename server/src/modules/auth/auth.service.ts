import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiResponse } from 'src/common/apiResponse';
import { LoginResponseDto } from './dtos/loginResponseDto';
import UserRepository from 'src/db/repositories/userRepository';
import { IUser } from 'src/db/model/IUser';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userRepository: UserRepository
  ) { }

  async signIn(email: string, password: string): Promise<ApiResponse<LoginResponseDto>> {
    const user: IUser = await this.userRepository.login(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { userId: user.UserId, email: user.Email };
    const token: String = await this.jwtService.signAsync(payload);

    const response = new ApiResponse<LoginResponseDto>();
    response.data = {
      accessToken: token,
      expireDate: new Date()
    }
    return response.Success();
  }
}
