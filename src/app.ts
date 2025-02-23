import express from 'express'
import cors from 'cors'
import { authRouter } from './routes/auth.routes';
import { userRouter } from './routes/user.routes';

const app=express();
app.use(cors());
app.use(express.json());
app.use("/auth",authRouter);
app.use("/user",userRouter);
export default app;