import { Request,Response, NextFunction } from 'express'

export const errorHandler = (status:number,name:string,message:string) => {
    return(err:any, req:Request, res:Response, next:NextFunction)=>{
        const statusCode = status || 500;
        const errorName = name || 'InternalServerError';
        const errormessage = message || 'Something went wrong!';
      
        res.status(statusCode).json({
          success: false,
          error: {
            name: errorName,
            message: errormessage,
            statusCode: statusCode,
          },
        });
    }
 
};


