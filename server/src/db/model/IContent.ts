
export interface IContent {
  ContentId?: Number;
  UserId: Number;
  ContentType: Number;
  Name: String;
  Description: String;
  ReleaseYear: Number;
  TargetAge: Number;
  SmallImage: String;// küçük resim
  IsPrivate: Boolean;
  CoverImage: String // kapak resmi
  CreatedDate: Date;
  DeletedDate?: Date;
  IsDelete?: Boolean;
  IsActive?: Boolean;
}
