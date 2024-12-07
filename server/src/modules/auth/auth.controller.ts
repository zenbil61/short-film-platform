import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/common/AuthGuard';
import { AuthService } from './auth.service';
import { LoginRequestDTO } from './dtos/loginRequestDTO'
import { ApiResponse } from 'src/common/apiResponse';
import { LoginResponseDto } from './dtos/loginResponseDto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() request: LoginRequestDTO): Promise<ApiResponse<LoginResponseDto>> {
    return await this.authService.signIn(request.email, request.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
