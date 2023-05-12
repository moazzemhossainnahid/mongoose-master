import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAllUsersFromDB, getUserByIdFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const user = await createUserToDB(data);
        res.status(200).json({
            status: "success",
            data: user
        })

    } catch (error) {
        console.log(error.message);
    };
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const user = await getAllUsersFromDB();
        res.status(200).json({
            status: "success",
            data: user
        })

    } catch (error) {
        console.log(error.message);
    };
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const user = await getUserByIdFromDB(id);
        res.status(200).json({
            status: "success",
            data: user
        })

    } catch (error) {
        console.log(error.message);
    };
};