import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";


// Creating schema


const userSchema = new Schema<IUser>({
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
})


// Creating Model
const User = model<IUser>("Users", userSchema);


export default User;

