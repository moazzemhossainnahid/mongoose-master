import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    id: string,
    roll: "student",
    password: string,
    name: {
        firstName: string,
        middleName: string,
        lastName: string,
    },
    dateOfBirth?: string,
    gender: "male" | "female",
    email?: string,
    contactNo?: string,
    emergencyContactNo?: string,
    presentAddress?: string,
    permanentAddress?: string

};

// statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser,IUserMethods>>;
  }

// Put all user instance methods in this interface:
export interface IUserMethods {
    fullName(): string;
  }
  