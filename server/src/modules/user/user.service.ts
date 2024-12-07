import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/common/apiResponse';
import { IUser } from 'src/db/model/IUser';
import UserRepository from 'src/db/repositories/userRepository';
import { createUserDto } from './dtos/createUserDto';
import { updateUserInfoDto } from './dtos/updateUserInfoDto';
import { userDetailInfo } from './dtos/userDetailInfo';


@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  async getUserInfo(id: Number): Promise<ApiResponse<userDetailInfo>> {
    const response = new ApiResponse<userDetailInfo>();
    const user: IUser = await this.userRepository.findById(id);


    response.data = {
      fullName: user.FullName,
      userName: user.UserName,
      description: user.Description,
      email: user.Email,
      phoneNumber: user.PhoneNumber,
      profilePicture: user.ProfilePicture
    };

    return response.Success();
  }
  async createUser(data: createUserDto): Promise<ApiResponse<Number>> {
    const response = new ApiResponse<Number>();
    const newUser: IUser = {
      FullName: data.fullName,
      UserName: data.userName,
      Email: data.email,
      Password: data.password,
      IsDeleted: false,
      IsActive: true,
      PhoneNumber: data.phoneNumber,
      ProfilePicture: "",
      CreatedDate: new Date(),
      DeletedDate: null,
      Description: ""
    }

    const createdUser: IUser = await this.userRepository.create(newUser);
    response.data = createdUser.UserId;

    return response.Success();
  }
  async updateInformation(userId:Number, data: updateUserInfoDto): Promise<ApiResponse<Boolean>> {
    const response = new ApiResponse<Boolean>();
    await this.userRepository.update(userId, {
      Description: data.description,
      FullName: data.fullName,
      ProfilePicture: data.profilePicture,
      UserName: data.userName
    });
    return response.Success();
  }
  async updatePhoneNumber(userId:Number, data: Number): Promise<ApiResponse<Boolean>> {
    const response = new ApiResponse<Boolean>();
    await this.userRepository.update(userId, {
      PhoneNumber: data,
    });
    return response.Success();
  }
  async updateEmail(userId:Number, data: String): Promise<ApiResponse<Boolean>> {
    const response = new ApiResponse<Boolean>();
    await this.userRepository.update(userId, {
      Email: data,
    });
    return response.Success();
  }
  async updatePassword(userId:Number, data: String): Promise<ApiResponse<Boolean>> {
    const response = new ApiResponse<Boolean>();
    await this.userRepository.update(userId, {
      Password: data,
    });
    return response.Success();
  }

}
