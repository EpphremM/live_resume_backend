import axios from 'axios';
import { errorHandler } from '../global/global.error';
import { Env } from '../shared/dotenv/env.exporter';
export const getAccessToken=async(code:any)=>{
    try{
const response=await axios.post(
    'https://github.com/login/oauth/access_token',
    {
        client_id:Env.git_id,
        client_secrete:Env.git_secrete,
        code,
        redirect_url:Env.git_callback_url
    },
    {headers:{Accept:'Application/json'}}
)


    }catch(error){
        new Error()
       return errorHandler(400,"Operational","Error happend");
    }

}
export const getGithubUser=async(accessToken:any)=>{
try{
const response=await axios.get(
    'https://api.github.com/user',
    {
        headers:{Authorization:`Bearers ${accessToken}`}
    }
)
return response.data;
}catch(error){
    new Error()
   return errorHandler(400,"Operational","Error happend");
}
}