import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
app.use(cors());



app.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send("Welcome to Mongoose Server");
        next();
    } catch (error) {
        console.log(error.message);
    };
});



export default app;