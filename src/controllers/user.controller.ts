import { NextFunction,Request,Response } from "express";
import { errorHandler } from "../global/global.error";
import { getGithubUser } from "../service/github.service";

export const getUserData=async(req:Request,res:Response,next:NextFunction)=>{
const access_token=req.query;
if(!access_token){
    errorHandler(400,"Operationl","Accesss Token is required");
    return
}
try{
    const user=await getGithubUser(access_token);
    res.status(200).json({
        status:"success",
        user:user
    })
}catch(err){
    console.log(err);
    errorHandler(400,"Operational","Error occured during getting user data");
    return 
}
}