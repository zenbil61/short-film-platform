import { Body, Controller, Get, Param, Request, Post, Put, UseGuards, SetMetadata } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiResponse } from 'src/common/apiResponse';
import { createUserDto } from './dtos/createUserDto';
import { updateUserInfoDto } from './dtos/updateUserInfoDto';
import { userDetailInfo } from './dtos/userDetailInfo';
import { AuthGuard } from 'src/common/AuthGuard';


@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) { }

  @Get('')
  async getUser(@Request() req): Promise<ApiResponse<userDetailInfo>> {
    const userId: number = req.user.userId;
    return await this.service.getUserInfo(userId);
  }
  @SetMetadata('isPublic', true)
  @Post('')
  async createUser(@Body() data: createUserDto): Promise<ApiResponse<number>> {
    return await this.service.createUser(data);
  }

  @Put('information')
  async updateInformation(@Request() req): Promise<ApiResponse<Boolean>> {
    const userId: number = req.user.userId;
    const request: updateUserInfoDto = req.body;
    return await this.service.updateInformation(userId, request);
  }

  @Put('email')
  async updateEmail(@Request() req): Promise<ApiResponse<Boolean>> {
    const userId: number = req.user.userId;
    const request: string = req.body['email'];
    return await this.service.updateEmail(userId, request);
  }

  @Put('phoneNumber')
  async updatePhoneNumber(@Request() req): Promise<ApiResponse<Boolean>> {
    const userId: number = req.user.userId;
    const request: number = req.body['phoneNumber'];
    return await this.service.updatePhoneNumber(userId, request);
  }

  @Put('password')
  async updatePassword(@Request() req): Promise<ApiResponse<Boolean>> {
    const userId: number = req.user.userId;
    const request: string = req.body['password'];
    return await this.service.updatePassword(userId, request);
  }
}
