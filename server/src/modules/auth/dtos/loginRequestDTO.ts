import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class LoginRequestDTO {

  @IsEmail()
  email: string;

  @IsString()
  // @MinLength(6)
  password: string;

  @IsOptional()
  @IsString()
  deneme: string;

}
