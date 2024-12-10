import { IsString, MaxLength } from "class-validator";

export class updateUserInfoDto {

    @IsString()
    @MaxLength(50)
    userName: string;

    @IsString()
    @MaxLength(100)
    fullName: string;

    @IsString()
    @MaxLength(300)
    description: string;

    profilePicture: string;
}
