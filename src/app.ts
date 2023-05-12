import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

// application route
import userRoutes from './app/modules/user/user.route';

const app: Application = express();

// parse data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//     try {
//         // res.send("Welcome to Mongoose Server");
//         // next();


//         /*
//         step-1:Interface
//         step-2:Schema
//         step-3:Model
//         step-4:Database Query
//         */

//         // Creating Interface

//         // interface IUser {
//         //     id: string,
//         //     roll: "student",
//         //     password: string,
//         //     name: {
//         //         firstName: string,
//         //         middleName: string,
//         //         lastName: string,
//         //     },
//         //     dateOfBirth?: string,
//         //     gender: "male" | "female",
//         //     email?: string,
//         //     contactNo?: string,
//         //     emergencyContactNo?: string,
//         //     presentAddress?: string,
//         //     permanentAddress?: string

//         // };

//         // // Creating schema

//         // const userSchema = new Schema<IUser>({
//         //     id: { type: String, required: true, unique: true },
//         //     roll: { type: String, required: true },
//         //     password: { type: String, required: true },
//         //     name: {
//         //         firstName: {
//         //             type: String, required: true
//         //         },
//         //         middleName: {
//         //             type: String,
//         //         },
//         //         lastName: {
//         //             type: String, required: true
//         //         },
//         //     },
//         //     dateOfBirth: {
//         //         type: String,
//         //         required: true
//         //     },
//         //     gender: {
//         //         type: String,
//         //         enum: ['male', 'female']
//         //     },
//         //     email: {
//         //         type: String,
//         //         required: true
//         //     },
//         //     contactNo: {
//         //         type: String,
//         //         required: true
//         //     },
//         //     emergencyContactNo: {
//         //         type: String,
//         //         required: true
//         //     },
//         //     presentAddress: {
//         //         type: String,
//         //         required: true
//         //     },
//         //     permanentAddress: {
//         //         type: String,
//         //         required: true
//         //     }
//         // })


//         // // Creating Model
//         // const User = model<IUser>("Users", userSchema)


//         // creating data


//         // const createUserToDB = async() => {
//         //     const user = new User({
//         //         id: '777',
//         //         roll: "student",
//         //         password: 'jhakanaka',
//         //         name: {
//         //             firstName: "MD.",
//         //             middleName: "Nahid",
//         //             lastName: "Hasan",
//         //         },
//         //         dateOfBirth: "6/4/1999",
//         //         gender: "male",
//         //         email: "moazzemhossainnahid@gmail.com",
//         //         contactNo: "01636090316",
//         //         emergencyContactNo: "01927962955",
//         //         presentAddress: "Mirzapur, Pakundia, Kishoreganj",
//         //         permanentAddress: "Kapasia-1730, Gazipur"
//         //     })

//         //     await user.save();
//         //     console.log(user);
//         // };


//     } catch (error) {
//         console.log(error.message);
//     };
// });


// use app
app.use('/api/v1/users', userRoutes)



export default app;