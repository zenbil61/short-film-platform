import { IsString, MaxLength } from "class-validator";

export class updateUserInfoDto {

    @IsString()
    @MaxLength(50)
    userName: String;

    @IsString()
    @MaxLength(100)
    fullName: String;

    @IsString()
    @MaxLength(300)
    description: String;

    profilePicture: String;
}
