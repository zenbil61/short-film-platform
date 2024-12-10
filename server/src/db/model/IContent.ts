
export interface IContent {
  ContentId?: number;
  UserId: number;
  ContentType: number;
  Name: string;
  Description: string;
  ReleaseYear: number;
  TargetAge: number;
  SmallImage: string;// küçük resim
  IsPrivate: boolean;
  CoverImage: string // kapak resmi
  CreatedDate: Date;
  DeletedDate?: Date;
  IsDelete?: boolean;
  IsActive?: boolean;
  ProcessedPath?: string;
  RawPath?: string;
}
