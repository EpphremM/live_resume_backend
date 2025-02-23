import dontenv from 'dotenv'
import { Env } from './shared/dotenv/env.exporter';
import express from 'express'
import app from './app';
dontenv.config();
app.listen(Env.port,()=>{
    console.log(`Server is running at port ${Env.port}`);
})