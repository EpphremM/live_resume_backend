import express from 'express'
import { getUserData } from '../controllers/user.controller';
export const userRouter=express.Router();
userRouter.get("me",getUserData);