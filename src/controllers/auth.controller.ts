import { NextFunction,Request,Response } from "express";
import { errorHandler } from "../global/global.error";
import { getAccessToken } from "../service/github.service";

export const gitAuth=async(req:Request,res:Response)=>{
    const {code}=req.query;
    if(!code){
         errorHandler(400,"Operational","Missing request code!");
         return;
    }
    try{

        const accessToken=await getAccessToken(code);
        res.status(200).json({
            status:"success",
            token:accessToken
        })
    }catch(err){
        console.log(err);
     errorHandler(400,"Operational","Error occured during git authentication");
     return;
    }
}