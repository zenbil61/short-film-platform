
import { IsString, MaxLength, MinLength, IsBoolean, IsNumber, IsDefined, IsNotEmpty, IsInt, IsArray, ArrayMinSize } from "class-validator";

export class UpdateContentDto {

    @IsNumber()
    @IsNotEmpty()
    contentId: number;

    @IsNumber()
    @IsNotEmpty()
    contentType: number;

    @MinLength(2)
    @MaxLength(100)
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(10)
    @MaxLength(200)
    @IsNotEmpty()
    description: String;

    @IsNumber()
    @IsNotEmpty()
    releaseYear: number;

    @IsNotEmpty()
    @IsNumber()
    targetAge: number;

    @IsString()
    @IsNotEmpty()
    smallImage: string;// küçük resim

    @IsString()
    @IsNotEmpty()
    coverImage: string // kapak resmi

    @IsBoolean()
    @IsNotEmpty()
    isPrivate: boolean;

    @IsArray()
    @IsNotEmpty()
    @ArrayMinSize(1) // Array'in içinde en az 1 eleman olmasını şart koşar.
    @IsNumber({}, { each: true }) // Array içindeki her elemanın Number türünde olması gerektiğini belirtir.
    categories: Array<Number>;
}
