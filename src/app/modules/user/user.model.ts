import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";


// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;

// Creating schema

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: { type: String, required: true, unique: true },
    roll: { type: String, required: true },
    password: { type: String, required: true },
    name: {
        firstName: {
            type: String, required: true
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String, required: true
        },
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    }
});

userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admins = await this.find({role:'admin'})
  });

userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });
  

// Creating Model
const User = model<IUser, UserModel>("Users", userSchema);


export default User;

