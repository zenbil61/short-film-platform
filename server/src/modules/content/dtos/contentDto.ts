
export class ContentDto {
    contentId: number;
    contentType: number;
    name: string;
    description: string;
    releaseYear: number;
    targetAge: number;
    smallImage: string;// küçük resim
    coverImage: string // kapak resmi
    isPrivate: boolean;
}
