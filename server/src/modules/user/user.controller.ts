import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiResponse } from 'src/common/apiResponse';
import { UserDTO } from './dtos/userDto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  getUser(): ApiResponse<UserDTO> {
    return this.service.getUser();
  }
}
