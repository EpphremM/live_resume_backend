import express from 'express'
import { gitAuth } from '../controllers/auth.controller';

export const authRouter=express.Router();
authRouter.get('/github/callback',gitAuth);
