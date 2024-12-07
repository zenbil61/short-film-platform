
export interface IContent {
  Id: number;
  Type: number;
  Name: string;
  Description: string;
  ReleaseYear: number;
  TargetAge: number;
  SmallImage: string;// küçük resim
  CoverImage: string // kapak resmi
  IsPrivate: boolean;
  CreatedDate: Date;
  DeletedDate: Date;
  IsDelete: Boolean;
  IsActive: Boolean
}
