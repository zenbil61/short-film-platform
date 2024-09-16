import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/common/apiResponse';
import { UserDTO } from './dtos/userDto';

@Injectable()
export class UserService {
  getUser(): ApiResponse<UserDTO> {
    const response = new ApiResponse<UserDTO>();
    response.data = {
      fullName: 'Mustafa Zenbil',
      id: 61,
    };
    return response.Success();
  }
}
