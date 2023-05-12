import express from "express";
import { createUser, getAllUsers, getUserById } from "./user.controller";

const router = express.Router();


router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/create-user', createUser);



export default router;