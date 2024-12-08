import { IsString, MaxLength } from "class-validator";

export class updatePhoneNumberDto {
    @IsString()
    @MaxLength(20)
    phoneNumber: String;

}
