
export interface IUser {
  UserId?: number;
  FullName: string;
  UserName: string;
  Email: string;
  Password: string;
  Description: string;
  PhoneNumber: number;
  ProfilePicture: string,
  IsDeleted: boolean,
  IsActive: boolean,
  CreatedDate: Date,
  DeletedDate: Date,
}
