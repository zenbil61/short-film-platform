import { IsEmail, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";
import { IsFullName, IsPassword } from "src/validators";

export class createUserDto {
    @IsEmail()
    @MaxLength(100)
    email: string;

    @IsString()
    @MaxLength(50)
    userName: string;

    @IsString()
    @MaxLength(100)
    fullName: string;

    @MinLength(6)
    password: string;

    @MaxLength(20)
    phoneNumber: number;
}
