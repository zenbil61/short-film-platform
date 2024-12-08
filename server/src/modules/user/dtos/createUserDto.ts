import { IsEmail, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";
import { IsFullName, IsPassword } from "src/validators";

export class createUserDto {
    @IsEmail()
    @MaxLength(100)
    email: String;

    @IsString()
    @MaxLength(50)
    userName: String;

    @IsString()
    @MaxLength(100)
    fullName: String;

    @MinLength(6)
    password: String;

    @MaxLength(20)
    phoneNumber: Number;
}
