
export interface IUser {
  UserId?: Number;
  FullName: String;
  UserName: String;
  Email: String;
  Password: String;
  Description: String;
  PhoneNumber: Number;
  ProfilePicture: String,
  IsDeleted: Boolean,
  IsActive: Boolean,
  CreatedDate: Date,
  DeletedDate: Date,
}
