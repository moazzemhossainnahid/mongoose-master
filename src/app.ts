import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express();
app.use(cors());


// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        // res.send("Welcome to Mongoose Server");
        // next();


        /*
        step-1:Interface
        step-2:Schema
        step-3:Model
        step-4:Database Query
        */

        // Creating Interface

        interface IUser {
            id: string,
            roll: "student",
            password: string,
            name: {
                firstName: string,
                middleName: string,
                lastName: string,
            };
            dateOfBirth?: string,
            gender: "male" | "female",
            email?: string,
            contactNo?: string,
            emergencyContactNo?: string,
            presentAddress?: string,
            permanentAddress?: string

        };

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
                type: String
            },
            gender: {
                type: String,
                enum: ['male', 'female']
            },
            email: {
                type: String,
            },
            contactNo: {
                type: String,
            },
            emergencyContactNo: {
                type: String,
            },
            presentAddress: {
                type: String,
            },
            permanentAddress: {
                type: String,
            }
        })



    } catch (error) {
        console.log(error.message);
    };
});



export default app;